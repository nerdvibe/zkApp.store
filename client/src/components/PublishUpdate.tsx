// import { Select, SelectItem } from "@nextui-org/react";
// import UpdateCard from "./PublishUpdate/UpdateCard";
// import AddUpdateCard from "./PublishUpdate/AddUpdateCard";
// import { useState } from "react";
// import UpdateModal from "./PublishUpdate/UpdateModal";

// interface IPublishUpdate {
//   apps: UserApps[];
//   // TODO: Update
//   updates: unknown[];
// }

// export default function PublishUpdate({ apps, updates }: IPublishUpdate) {
//   const [selectedApp, setSelectedApp] = useState("");
//   const [updateData, setUpdateData] = useState();
//   const [addUpdateCard, setAddUpdateCard] = useState(false);

//   const updateEdit = (data: unknown) => {
//     setAddUpdateCard(false);
//     setUpdateData(data);
//   };

//   const updateAdd = () => {
//     setAddUpdateCard(true);
//     setUpdateData({ title: "", description: "" });
//   };

//   return (
//     <div className="w-full flex flex-col gap-4 max-w-[2000px] items-center">
//       <div className="w-full flex justify-end">
//         <Select
//           size={"md"}
//           label="Select an app"
//           className="max-w-xs text-white"
//           onChange={(e) => setSelectedApp(e.target.value)}
//         >
//           <SelectItem className="text-white" key={""} value={""}>
//             Overall
//           </SelectItem>
//           {apps.map((app) => (
//             <SelectItem className="text-white" key={app.id} value={app.id}>
//               {app.title}
//             </SelectItem>
//           ))}
//         </Select>
//       </div>
//       <div className="flex w-full justify-center">
//         <div className="flex w-full flex-wrap gap-5 justify-center">
//           <AddUpdateCard setShowModal={updateAdd} />
//           <UpdateModal
//             toggleModal={() => setUpdateData(undefined)}
//             show={!!updateData}
//             data={updateData}
//             availableApps={apps}
//             initialSelectedApp={updateData?.product?.id || selectedApp}
//             add={addUpdateCard}
//           />
//           {updates
//             .filter((update) =>
//               selectedApp ? update?.Product?.id === selectedApp : true
//             )
//             .map((update) => (
//               <UpdateCard update={update} onEdit={updateEdit} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }
