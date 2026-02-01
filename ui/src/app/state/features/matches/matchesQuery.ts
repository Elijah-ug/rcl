import type { AddMatch, MatchResponse } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const matchQuery = createApi({
  reducerPath: "matches",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_MATCHES_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["Match"],
  endpoints: (builder) => ({
    getAllMatches: builder.query<MatchResponse, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Match"],
    }),

    getMatch: builder.query<any, number>({
      query: (match) => ({
        url: `/${match}`,
        method: "GET",
      }),
      providesTags: ["Match"],
    }),

    registerMatch: builder.mutation<MatchResponse, AddMatch>({
      query: (body) => ({
        url: "/registration",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Match"],
    }),

    updateMatch: builder.mutation<MatchResponse, { data: any; match: number }>({
      query: ({ data, match }) => ({
        url: `/${match}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Match"],
    }),
  }),
});
export const { useGetAllMatchesQuery, useGetMatchQuery, useRegisterMatchMutation, useUpdateMatchMutation } = matchQuery;
