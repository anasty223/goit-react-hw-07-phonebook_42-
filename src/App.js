import { useState } from "react";
import Form from "./components/Form/Form";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import { nanoid } from "nanoid";
import Div from "./components/Container/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useGetContactsQuery } from "../src/redux/contacts";
import { useSelector } from "react-redux";
import { getFilter } from "./redux/items-selector";

export default function App() {
  const [contacts, setContats] = useState([]);
  const { data, isLoading } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  console.log("data", data);
  console.log("isLoading", isLoading);

  const getVisibleContact = () => {
    const normalizeFilter = filter.toLowerCase();

    return data.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  return (
    <Div>
      <h1>Phonebook</h1>

      <Form />

      <Filter />
      <h2>Contacts</h2>
      <ContactsList contacts={data} />
      <ToastContainer />
    </Div>
  );
}