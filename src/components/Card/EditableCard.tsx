import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody } from "@nextui-org/react";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

interface IProps {
  initialValue: string;
}

export default function EditableCard({ initialValue }: IProps) {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(initialValue);

  const toggleEdit = () => setEditMode(!editMode);
  return (
    <Card className="w-full  bg-[#1D1932]">
      <CardBody className="py-8">
        <div className="flex w-full justify-end pb-8">
          {editMode ? (
            <FontAwesomeIcon
              icon={faFloppyDisk}
              onClick={toggleEdit}
              className="cursor-pointer"
              size="lg"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPencil}
              onClick={toggleEdit}
              className="cursor-pointer"
              size="lg"
            />
          )}
        </div>
        <div data-color-mode="dark">
          {editMode ? (
            <MDEditor value={value} onChange={setValue} />
          ) : (
            <MDEditor.Markdown
              source={value}
              style={{ whiteSpace: "pre-wrap", background: "none" }}
            />
          )}
        </div>
      </CardBody>
    </Card>
  );
}
