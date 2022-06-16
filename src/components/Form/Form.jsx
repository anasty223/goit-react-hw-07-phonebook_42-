import { Input, Label, ButtonAdd, Icon } from "./Form.styles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContacts } from "../../redux/action";
import { toast, ToastContainer } from "react-toastify";
import { AiFillFolderOpen } from "react-icons/ai";
import { useAddContactsMutation } from "../../redux/contacts";

export default function Form({ contacts }) {
  const addContact = useAddContactsMutation();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const returnName = contacts.find((contact) => contact.name === name);
    if (returnName) {
      toast.warn("This name is already in the phonebook ");
    } else {
      addContact({ name, number });

      toast(({ data }) => `Added ${name} in Phonebook`, {
        data: "world",
      });
    }

    setName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
          <ButtonAdd type="submit">
            Add contact
            <Icon>
              <AiFillFolderOpen size="1rem" />
            </Icon>
          </ButtonAdd>
        </Label>
      </form>
      <ToastContainer closeButton={false} />
    </>
  );
}
