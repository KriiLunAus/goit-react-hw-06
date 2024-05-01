import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({contacts, onDelete}) => {
    return (
        <>
        <ul className={css.contactsList}>
                
                {contacts.map(contact => {
                    return (
                        <Contact key={contact.id} {...contact} onDelete={onDelete} />
                    
                )
            })}
                
        </ul>
        </>
    )
}

export default ContactList;