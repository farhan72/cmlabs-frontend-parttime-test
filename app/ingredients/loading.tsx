import { MainLayout } from "@/components/templates/MainLayout";
import { GridLayout } from "@/components/templates/GridLayout";
import { Skeleton } from "@/components/atoms/Skeleton";

export default function Loading() {
  return (
    <MainLayout>
      <GridLayout
        title={<Skeleton className="h-12 w-64 md:w-96" />}
        description={<Skeleton className="h-6 w-48 md:w-80 mt-2" />}
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:gap-6 mt-10">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-xl border border-gray-100 bg-white p-4 shadow-sm h-[200px] justify-center items-center">
              <Skeleton className="h-28 w-28 rounded-full" />
              <Skeleton className="h-6 w-3/4 mt-4" />
            </div>
          ))}
        </div>
      </GridLayout>
    </MainLayout>
  );
}
