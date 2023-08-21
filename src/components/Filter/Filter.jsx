import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };
  return (
    <div>
      <label htmlFor="findInput">Find contacts by name or number</label>
      <input
        type="text"
        id="findInput"
        placeholder="Search contacts"
        value={value}
        name="filter"
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Filter;
