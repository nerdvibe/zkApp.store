import mock from "@/mocks/product-description.json";
import EditableCard from "../../../Card/EditableCard";

export default function Description() {
  return <EditableCard initialValue={mock.description} />;
}
