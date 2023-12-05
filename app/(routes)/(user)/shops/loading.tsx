import { Loader2Icon } from "lucide-react";

const Loading = () => {
      return (
            <div className="base-block h-64">
                  <h1 className="base-title">Мои магазины</h1>
                  <Loader2Icon className="mx-auto mt-16 h-10 w-10 animate-spin text-indigo-500" />
            </div>
      );
};
export default Loading;
