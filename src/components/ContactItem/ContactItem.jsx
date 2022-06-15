import { Item, ButtonDelete } from "./ContactItem.styles";
import { AiFillDelete } from "react-icons/ai";
import PropTypes from "prop-types";

function ContactItem({ name, number, onDeleteContact, id }) {
  return (
    <Item>
      {name}
      <p>( {number} )</p>
      <ButtonDelete type="submit" onClick={() => onDeleteContact(id)}>
        DELETE
        <AiFillDelete size="1.2rem" />
      </ButtonDelete>
    </Item>
  );
}
export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string,
};
