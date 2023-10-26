import EditableCard from "../../../Card/EditableCard";

export default function Description({ description }: { description?: string }) {
  return description ? <EditableCard initialValue={description} /> : <></>;
}
