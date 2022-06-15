import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6268374301dab900f1cb5c2f.mockapi.io",
    tagTypes: ["CONTACT"],
  }),

  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["CONTACT"],
    }),
    addContacts: builder.mutation({
      query: () => ({
        url: "/contacts",
        method: "POST",
      }),
    }),
  }),
});
console.log("contactsApi", contactsApi);
export const { useGetContactsQuery } = contactsApi;
