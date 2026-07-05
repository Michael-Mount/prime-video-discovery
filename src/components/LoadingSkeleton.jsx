function SkeletonBlock({ className = "" }) {
  return <div className={`skeleton-shimmer bg-white/10 ${className}`} />;
}

export function ContentRailSkeleton({ title = "Loading" }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div className="mb-5">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>

        <SkeletonBlock className="mt-3 h-4 w-full max-w-md rounded-full" />
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto pb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <article
            key={index}
            className="w-64 shrink-0 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 sm:w-72"
          >
            <SkeletonBlock className="aspect-[16/9] w-full" />

            <div className="p-4">
              <SkeletonBlock className="h-5 w-3/4 rounded-full" />
              <SkeletonBlock className="mt-3 h-4 w-1/2 rounded-full" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MovieGridSkeleton() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <article
          key={index}
          className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
        >
          <SkeletonBlock className="aspect-[16/10] w-full" />

          <div className="p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <SkeletonBlock className="h-5 w-2/3 rounded-full" />
              <SkeletonBlock className="h-5 w-10 rounded-full" />
            </div>

            <SkeletonBlock className="h-4 w-3/4 rounded-full" />
            <SkeletonBlock className="mt-3 h-4 w-1/3 rounded-full" />
          </div>
        </article>
      ))}
    </div>
  );
}
