import CustomCard from "../Card";

export default function UserApps() {
  return (
    <div className="flex justify-center m-auto">
      <div className="flex justify-center items-center flex-wrap gap-4">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
}
