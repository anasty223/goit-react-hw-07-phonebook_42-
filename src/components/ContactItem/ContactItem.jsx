import { Item, ButtonDelete } from "./ContactItem.styles";
import { AiFillDelete } from "react-icons/ai";
import PropTypes from "prop-types";

function ContactItem({ name, phone, func, id }) {
  return (
    <Item>
      {name}
      <p>( {phone} )</p>
      <ButtonDelete type="submit" onClick={() => func(id)}>
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
  func: PropTypes.func.isRequired,
  id: PropTypes.string,
};
