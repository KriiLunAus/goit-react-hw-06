import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = () => {
    return (
        <>
        <ul className={css.contactsList}>            
        <Contact  />
        </ul>
        </>
    )
}

export default ContactList;