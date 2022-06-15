import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6268374301dab900f1cb5c2f.mockapi.io/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Post"],
    }),
  }),
});
console.log("contactsApi", contactsApi);
export const { useGetContactsQuery } = contactsApi;
