import { Skeleton } from "@/components/ui/skeleton";
import { Loader2Icon } from "lucide-react";

const Loading = () => {
      return (
            <div className="base-block min-h-[700px]">
                  <div className="flex items-center gap-2.5">
                        <Skeleton className="h-8 w-full" />
                  </div>
                  <div className="justify-center items-center w-full flex mt-64">
                        <Loader2Icon className="mx-auto h-10 w-10 animate-spin text-indigo-500" />
                  </div>
            </div>
      );
};
export default Loading;
