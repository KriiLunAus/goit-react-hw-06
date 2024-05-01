import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
const Contact = ({ id, name, number, onDelete }) => {
    return (<>
        <li id={id} className={css.contact}>
            <div>
        <p> <IoPerson />  { name }</p>
        <p> <FaPhoneAlt />  { number }</p>
            </div>
    <button onClick={()=> onDelete(id)}>Delete</button>
    </li>
    </>)
}


export default Contact;