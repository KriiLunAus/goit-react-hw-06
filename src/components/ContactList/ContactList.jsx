import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { getContacts, selectNameFilter } from "../../redux/store";

const ContactList = () => {

    const selectName = useSelector(selectNameFilter);

    const contactsState = useSelector(getContacts);

    const sortedList = contactsState.filter(contact => {
            return contact.name.toLowerCase().includes(selectName.name.toLowerCase());
        })

    
    return (
        <>
        <ul className={css.contactsList}>            
                <Contact contacts={sortedList} />
        </ul>
        </>
    )
}

export default ContactList;