import type { Admin } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const adminAuthQuery = createApi({
  reducerPath: "adminAuth",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_ADMIN_BASE_URL }),
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    getAllAdmins: builder.query<Admin, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Admin"],
    }),

    getAdmin: builder.query<Admin, void>({
      query: (admin) => ({
        url: `/${admin}`,
        method: "GET",
      }),
      providesTags: ["Admin"],
    }),

    addAdmin: builder.mutation<Admin, Partial<Admin>>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body
      }),
      invalidatesTags: ["Admin"],
    }),

    updateAdmin: builder.mutation<Admin, Partial<Admin> & Pick<Admin, "id"> >({
      query: ({id, ...patch}) => ({
        url: `/${id}`,
        method: "PATCH",
        patch
      }),
      invalidatesTags: ["Admin"],
    }),
  }),
});

export const { useGetAllAdminsQuery, useGetAdminQuery, useAddAdminMutation } = adminAuthQuery;
