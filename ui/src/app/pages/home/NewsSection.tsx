import { useGetAllNewsPostsQuery } from "@/app/state/features/news/newsQuery";
import { backgroundImagwe1 } from "@/app/statics/images";
import { Spinner } from "@/components/ui/spinner";
import React from "react";

export const NewsSection: React.FC = () => {
  const { data, isLoading } = useGetAllNewsPostsQuery();

  return (
    <section className="sm:flex items-center justify-center min-h-screen">
      {isLoading ? (
        <Spinner className="size-8" />
      ) : data ? (
        <div className="">
          {/* Header */}
          
            <h2 className="text-2xl font-bold text-gray-900 text-center">Latest News</h2>

          <div className="grid gap-3 sm:grid-cols-4 place-items-center">
            {data.data.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 bg-white rounded-2xl  hover:shadow-md transition max-w-full w-xs sm:w-sm "
              >
                <img src={backgroundImagwe1} alt="" className="rounded-t-2xl" />
                <div className="grid p-3">
                  <h3 className="mt-2 font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  <p className="text-xs text-gray-400 text-end">{new Date(item.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h3 className="font-semibold text-lg text-amber-600">No News Articles Yet!, Keep an eye for updates!</h3>
        </div>
      )}
    </section>
  );
};
