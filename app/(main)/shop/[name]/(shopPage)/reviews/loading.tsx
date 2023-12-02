import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
      return (
            <>
                  <div className="flex items-center justify-between w-3/4 mt-8">
                        <h3 className="text-3xl font-bold">Отзывы</h3>
                  </div>
                  <div className="w-3/4 flex flex-col gap-3 mt-6">
                        {Array.from({ length: 20 }, (_, i) => (
                              <Skeleton key={i} className="h-64 rounded-lg bg-neutral-300 w-full" />
                        ))}
                  </div>
            </>
      );
};
export default Loading;
