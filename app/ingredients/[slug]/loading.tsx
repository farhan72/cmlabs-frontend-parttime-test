import { MainLayout } from "@/components/templates/MainLayout";
import { GridLayout } from "@/components/templates/GridLayout";
import { Skeleton } from "@/components/atoms/Skeleton";

export default function Loading() {
  return (
    <MainLayout>
      <GridLayout
        breadcrumb={<Skeleton className="h-4 w-48" />}
        title={<Skeleton className="h-12 w-72 md:w-96 mt-6" />}
        description={<Skeleton className="h-6 w-32 mt-2" />}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6 mt-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm h-[320px]">
              <Skeleton className="h-48 w-full rounded-none" />
              <div className="p-5 flex flex-col gap-4">
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-8 w-full" />
              </div>
            </div>
          ))}
        </div>
      </GridLayout>
    </MainLayout>
  );
}
