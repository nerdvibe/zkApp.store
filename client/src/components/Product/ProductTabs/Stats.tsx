import EmptyStateCard from "@/components/EmptyStateCard";
import catAnimation from "@/assets/animations/cat.json";

export default function Stats() {
  return (
    <div className="flex gap-4 w-full">
      {/* <Reviews reviews={reviews} />
      <NewUsersCard /> */}
      <EmptyStateCard
        title="Coming soon"
        description="Stay tuned"
        image={catAnimation}
        speed={1}
      />
    </div>
  );
}
