import type { AddTeam, FetchTeam } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teamQuery = createApi({
  reducerPath: "teams",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_TEAMS_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["Teams"],
  endpoints: (builder) => ({
    getAllTeams: builder.query<FetchTeam, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Teams"],
    }),
    getTeam: builder.query<any, void>({
      query: (team) => ({
        url: `/${team}`,
        method: "GET",
      }),
      providesTags: ["Teams"],
    }),

    getUnfixedTeams: builder.query<FetchTeam, number>({
      query: (matchday) => ({
        url: `/unfixed/${matchday}`,
        method: "GET",
      }),
      providesTags: ["Teams"],
    }),

    registerTeam: builder.mutation<AddTeam, any>({
      query: (body) => ({
        url: "/registration",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useGetAllTeamsQuery, useGetTeamQuery, useGetUnfixedTeamsQuery, useRegisterTeamMutation } = teamQuery;
