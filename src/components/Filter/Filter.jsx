import { Input } from "./Filter.styles";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/action";
import { getFilter } from "../../redux/items-selector";

const Filter = () => {
  const filter = useSelector(getFilter);
  console.log("filter", filter);
  const dispatch = useDispatch();

  return (
    <>
      <label>
        Find contact by name
        <Input
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
        />
      </label>
    </>
  );
};
export default Filter;

// Filter.propTypes = {
//   // value: PropTypes.string,
//   // onChange: PropTypes.func.isRequired,
// };
