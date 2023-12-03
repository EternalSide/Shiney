import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
      return (
            <>
                  <h1 className="base-title text-black">Для продавцов</h1>
                  <Skeleton className="h-[146px] w-full rounded-lg bg-neutral-300 mt-4" />
            </>
      );
};
export default Loading;
