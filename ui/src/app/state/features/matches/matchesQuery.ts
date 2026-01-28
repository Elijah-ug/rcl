import type { AddTeam, MatchRes } from "@/types/types";
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
    getAllMatches: builder.query<MatchRes, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Match"],
    }),
    getMatch: builder.query<any, void>({
      query: (news) => ({
        url: `/${news}`,
        method: "GET",
      }),
      providesTags: ["Match"],
    }),

    registerMatch: builder.mutation<AddTeam, any>({
      query: (body) => ({
        url: "/registration",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Match"],
    }),
    updateMatch: builder.mutation<AddTeam, any>({
      query: (body) => ({
        url: "/registration",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Match"],
    }),
  }),
});
export const { useGetAllMatchesQuery, useGetMatchQuery, useRegisterMatchMutation, useUpdateMatchMutation } = matchQuery;
