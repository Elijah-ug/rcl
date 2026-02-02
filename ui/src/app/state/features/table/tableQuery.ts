import type { FetchNews, PublishTable, TableRequest } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tableQuery = createApi({
  reducerPath: "table",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_TABLE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["Table"],
  endpoints: (builder) => ({
    getTable: builder.query<FetchNews, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Table"],
    }),

    // add table
    publishTable: builder.mutation<TableRequest, PublishTable>({
      query: (body) => ({
        url: "/publish",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Table"],
    }),

    // reset table
    resetTable: builder.mutation<any, void>({
      query: () => ({
        url: "/reset",
        method: "POST",
      }),
      invalidatesTags: ["Table"],
    }),
  }),
});

export const { useGetTableQuery, usePublishTableMutation, useResetTableMutation } = tableQuery;
