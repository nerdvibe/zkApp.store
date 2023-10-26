import NewUsersCard from "@/components/Charts/NewUsers/NewUsersCard";
import Reviews from "@/components/Charts/Reviews/Reviews";

export default function Stats({ reviews }: any) {
  return (
    <div className="flex gap-4 w-full">
      <Reviews reviews={reviews} />
      <NewUsersCard />
    </div>
  );
}
