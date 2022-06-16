import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6268374301dab900f1cb5c2f.mockapi.io/contacts",
    tagTypes: ["CONTACT"],
  }),

  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["CONTACT"],
    }),
    addContacts: builder.mutation({
      query: (newContact) => ({
        url: "/contacts",
        method: "POST",
        body: {
          name: newContact.name,
          phone: newContact.phone,
        },
      }),
      invalidatesTags: ["CONTACT"],
    }),
    deleteContacts: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CONTACT"],
    }),
  }),
});
console.log("contactsApi", contactsApi);
export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;
