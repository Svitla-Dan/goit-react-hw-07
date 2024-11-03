import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import style from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={style.contact}>
      <div className={style.contactInfo}>
        <p className={style.contactName}>
          <FaUserAlt />
          &nbsp;
          {contact.name}
        </p>
        <p className={style.contactTel}>
          <FaPhoneAlt />
          &nbsp;
          <a href={`tel:${contact.number}`}>{contact.number}</a>
        </p>
      </div>
      <button className={style.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
