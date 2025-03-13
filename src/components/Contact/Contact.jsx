import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";
import css from "./Contact.module.css"

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.li}>
      {contact.name}: {contact.number}
      <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
    </li>
  );
};

export default Contact;