import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import style from './SearchBox.module.css';

const SearchBox = () => {
  const inputId = useId();
  const dispatch = useDispatch();

  const searchTerm = useSelector(selectNameFilter);

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={style.searchWrapper}>
      <label htmlFor={inputId} className={style.label}>
        Сontacts
      </label>
      <div className={style.inputContainer}>
        <input
          type="text"
          id={inputId}
          className={style.searchInput}
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search contacts..."
        />
        <FaSearch className={style.icon} />
      </div>
    </div>
  );
};

export default SearchBox;
