import PropTypes from "prop-types";
import { List} from "./ContactList.styles";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/action";
import { getVisibleContacts, getContacts } from "../../redux/items-selector";
import ContactItem from "../ContactItem/ContactItem";

function ContactsList() {
  const contacts = useSelector(getContacts);
  // console.log("contacts", contacts);

  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={(id) => dispatch(deleteContact(id))}
        />
      ))}
    </List>
  );
}
export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
