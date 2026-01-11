import type { AdminAuthRequest, AdminUpdate, GetAdmin } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const adminAuthQuery = createApi({
  reducerPath: "adminAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_ADMIN_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    getAllAdmins: builder.query<GetAdmin, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Admin"],
    }),

    getAdmin: builder.query<GetAdmin, void>({
      query: () => ({
        url: "/me",
        method: "GET",
      }),
      providesTags: ["Admin"],
    }),

    addAdmin: builder.mutation<AdminAuthRequest, any>({
      query: (body) => ({
        url: "/registration",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admin"],
    }),

    updateAdmin: builder.mutation<AdminAuthRequest, AdminUpdate>({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Admin"],
    }),
  }),
});

export const { useGetAllAdminsQuery, useGetAdminQuery, useAddAdminMutation, useUpdateAdminMutation } = adminAuthQuery;
