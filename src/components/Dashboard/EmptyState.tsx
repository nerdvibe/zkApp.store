import EmptyStateCard from "./EmptyStateCard";

export default function EmptyState() {
  return (
    <div className="flex gap-10 flex-col">
      <div className="flex justify-center gap-8">
        <div className="hidden lg:block">
          <EmptyStateCard />
        </div>
        <div>
          <EmptyStateCard add />
        </div>
        <div className="hidden md:block">
          <EmptyStateCard />
        </div>
      </div>
    </div>
  );
}
