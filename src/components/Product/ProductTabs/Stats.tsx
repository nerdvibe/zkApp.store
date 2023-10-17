import NewUsersCard from "@/components/Charts/NewUsers/NewUsersCard";
import Reviews from "@/components/Charts/Reviews/Reviews";

export default function Stats() {
  return (
    <div className="flex gap-4 w-full">
      <Reviews />
      <NewUsersCard />
    </div>
  );
}
