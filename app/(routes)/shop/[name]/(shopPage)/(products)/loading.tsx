import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
      return (
            <>
                  <h3 className="text-3xl font-bold mt-8 ">Товары</h3>
                  <div className="grid mt-6 max-[520px]:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-full max-md:gap-3">
                        {Array.from({ length: 20 }, (_, i) => (
                              <Skeleton key={i} className="h-64 rounded-lg bg-neutral-300" />
                        ))}
                  </div>
            </>
      );
};
export default Loading;
