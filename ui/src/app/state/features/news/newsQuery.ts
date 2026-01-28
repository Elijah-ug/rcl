import type { AddNewsPost, AddNewsResponse, FetchNews } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsQuery = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_NEWS_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["NewsPosts"],
  endpoints: (builder) => ({
    getAllNewsPosts: builder.query<FetchNews, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["NewsPosts"],
    }),

    // add news
    addNewsPost: builder.mutation<AddNewsResponse, AddNewsPost>({
      query: (body) => ({
        url: "/registration",
        method: "POST",
        body,
      }),
      invalidatesTags: ["NewsPosts"],
    }),
  }),
});

export const { useGetAllNewsPostsQuery, useAddNewsPostMutation } = newsQuery;
