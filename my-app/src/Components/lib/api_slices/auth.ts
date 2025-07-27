import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const apiAuthSlice = createApi({
  reducerPath: "apiAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/auth", // 👉 sửa thành URL backend thật của bạn
    credentials: "include", // nếu dùng cookie
  }),

  endpoints: (builder) => ({
    login: builder.mutation<
      { access_token: string },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),

    logout: builder.mutation({
      query: () => ({ url: "/logout", method: "POST" }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = apiAuthSlice;
