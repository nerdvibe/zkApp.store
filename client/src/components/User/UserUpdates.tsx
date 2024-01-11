import EmptyStateCard from "../EmptyStateCard";
import satellite from "@/assets/animations/satellite.json";

export default function UserUpdates() {
  return (
    <div className="flex justify-center m-auto min-h-[400px]">
      <div className="flex justify-center items-center flex-wrap gap-4 flex-col">
        <EmptyStateCard
          image={satellite}
          title="There are no updates so far..."
          description="Come back later"
        />
      </div>
    </div>
  );
}
