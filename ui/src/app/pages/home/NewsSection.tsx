import { useGetAllNewsPostsQuery } from "@/app/state/features/news/newsQuery";
import { backgroundImagwe1 } from "@/app/statics/images";
import { Spinner } from "@/components/ui/spinner";
import React from "react";

export const NewsSection: React.FC = () => {
  const { data, isLoading } = useGetAllNewsPostsQuery();

  return (
    <section className="py-16 sm:flex sm:items-center justify-center">
      {isLoading ? (
        <Spinner className="size-8" />
      ) : data ? (
        <div className="">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-4">
            {data.data.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 bg-white rounded-2xl  hover:shadow-md transition w-full max-w-xs  "
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
        <h3 className="text-center text-xl font-semibold">No News Posts Yet!</h3>
      )}
    </section>
  );
};
