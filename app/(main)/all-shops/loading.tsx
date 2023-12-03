import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
      return (
            <>
                  <h1 className="base-title">Магазины</h1>
                  <div className="grid_new-products">
                        {Array.from({ length: 20 }, (_, i) => (
                              <Skeleton key={i} className="h-64 rounded-lg bg-neutral-300" />
                        ))}
                  </div>
            </>
      );
};
export default Loading;
