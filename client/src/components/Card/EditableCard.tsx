import { useUpdateZkAppMutation } from "@/gql/generated";
import { RootState } from "@/store/store";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardBody } from "@nextui-org/react";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { useSelector } from "react-redux";
import ConfirmationModal from "../ConfirmationModal";
import { toast } from "react-hot-toast";

interface IProps {
  initialValue: string;
  editable?: boolean;
  refetchData: () => void;
}

export default function EditableCard({
  initialValue,
  editable,
  refetchData,
}: IProps) {
  const [editMode, setEditMode] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [value, setValue] = useState(initialValue);
  const app = useSelector((state: RootState) => state.product.selectedApp);
  const [updateZkApp, { data }] = useUpdateZkAppMutation();

  const toggleEdit = () => setEditMode(!editMode);
  const toggleShowConfirmation = () => setShowConfirmation(!showConfirmation);

  const onSave = async () => {
    if (app?.id) {
      toggleShowConfirmation();
      const { data } = await toast.promise(
        updateZkApp({
          variables: {
            zkApp: {
              id: app.id,
              body: value,
            },
          },
        }),
        {
          loading: "Updating ZkApp description",
          success: <b>ZkApp description updated!</b>,
          error: (err) => <b>{err.message}</b>,
        }
      );
      if (data) {
        toggleEdit();
        refetchData();
      }
    }
  };

  const deleteEdit = () => {
    setValue(data?.updateZkApp?.body || initialValue);
    toggleEdit();
    refetchData();
  };

  return (
    <Card className="w-full auth-card">
      <CardBody className="py-8">
        <div className="flex w-full justify-between pb-8">
          <h1 className="text-2xl">Description</h1>
          {editable &&
            (editMode ? (
              <div className="flex gap-4">
                <Button
                  color="danger"
                  variant="bordered"
                  onClick={deleteEdit}
                  startContent={
                    <FontAwesomeIcon
                      icon={faX}
                      className="cursor-pointer"
                      size="lg"
                    />
                  }
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onClick={toggleShowConfirmation}
                  startContent={
                    <FontAwesomeIcon
                      icon={faFloppyDisk}
                      className="cursor-pointer"
                      size="lg"
                    />
                  }
                >
                  Save
                </Button>
              </div>
            ) : (
              <Button
                color="primary"
                onClick={toggleEdit}
                endContent={
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="cursor-pointer"
                    size="lg"
                  />
                }
              >
                Edit
              </Button>
            ))}
        </div>
        <div data-color-mode="dark">
          {editMode ? (
            <MDEditor
              value={value}
              onChange={(value?: string) => setValue(value || "")}
              style={{
                whiteSpace: "pre-wrap",
                background: "none",
                minHeight: "500px",
              }}
            />
          ) : (
            <MDEditor.Markdown
              source={value || "No description"}
              style={{ whiteSpace: "pre-wrap", background: "none" }}
            />
          )}
        </div>
        <ConfirmationModal
          show={showConfirmation}
          onConfirm={onSave}
          onCancel={toggleShowConfirmation}
        >
          <h1>Confirm description update?</h1>
        </ConfirmationModal>
      </CardBody>
    </Card>
  );
}
