import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import Loader from '../Loader/Loader';
import Error from '../ErrorMessage/ErrorMessage';
import style from './App.module.css';
import { fetchContacts } from '../../redux/contactsOps';
import { selectLoading, selectErrorMessage } from '../../redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const errorMessage = useSelector(selectErrorMessage);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {errorMessage && <Error>{errorMessage}</Error>}
      {!isLoading && !errorMessage && <ContactList />}
    </div>
  );
};

export default App;
