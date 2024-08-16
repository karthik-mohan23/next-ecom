import SkeletonCard from "@/components/skeletonCard";

export default function Loading() {
  return (
    <div className="px-10 md:px-0 pt-10 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-20">
      {Array.from({ length: 6 }).map((item, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
