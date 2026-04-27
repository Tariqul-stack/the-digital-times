const SidebarSkeleton = () => (
  <div className="col-span-3">
    <div className="space-y-4">
      <div className="h-8 w-40 animate-pulse rounded bg-gray-200" />
      <div className="space-y-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-11 w-full animate-pulse rounded-md bg-gray-100"
          />
        ))}
      </div>
    </div>
  </div>
);

const NewsCardSkeleton = ({ index }) => (
  <div
    key={index}
    className="overflow-hidden rounded-sm border border-gray-200 bg-white"
  >
    <div className="flex items-center justify-between bg-[#f3f3f3] px-7 py-6">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 animate-pulse rounded-full bg-gray-300" />
        <div className="space-y-3">
          <div className="h-6 w-40 animate-pulse rounded bg-gray-300" />
          <div className="h-5 w-28 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="h-8 w-8 animate-pulse rounded bg-gray-300" />
        <div className="h-8 w-8 animate-pulse rounded bg-gray-300" />
      </div>
    </div>

    <div className="space-y-6 px-7 py-8">
      <div className="space-y-3">
        <div className="h-8 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-8 w-5/6 animate-pulse rounded bg-gray-200" />
      </div>
      <div className="h-[420px] w-full animate-pulse rounded-xl bg-gray-200" />
      <div className="space-y-3">
        <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
      </div>
    </div>

    <div className="mx-7 flex items-center justify-between border-t border-gray-200 py-6">
      <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
      <div className="h-6 w-20 animate-pulse rounded bg-gray-200" />
    </div>
  </div>
);

const RightSidebarSkeleton = () => (
  <div className="col-span-3">
    <div className="space-y-4">
      <div className="h-8 w-28 animate-pulse rounded bg-gray-200" />
      <div className="h-12 w-full animate-pulse rounded-md bg-gray-100" />
      <div className="h-12 w-full animate-pulse rounded-md bg-gray-100" />
    </div>
  </div>
);

export default function Loading() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-5 p-10">
      <SidebarSkeleton />

      <div className="col-span-6 space-y-6">
        <div className="h-10 w-56 animate-pulse rounded bg-gray-200" />
        {Array.from({ length: 2 }).map((_, index) => (
          <NewsCardSkeleton key={index} index={index} />
        ))}
      </div>

      <RightSidebarSkeleton />
    </div>
  );
}
