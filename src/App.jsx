import './App.css'
import { useState,useEffect } from 'react';
import initialContacts from '../src/contacts.json'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

const App = () => {

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");


  
   useEffect(() => {
        const contactsInStorage = window.localStorage.getItem("contacts");
        if (contactsInStorage) {
            setContacts(JSON.parse(contactsInStorage));
        }
    }, []);


    useEffect(() => {
        if (contacts !== null) {
            window.localStorage.setItem("contacts", JSON.stringify(contacts))
        }
    }, [contacts]);
  
  

  const addContact = ((newContact) =>{
    setContacts((prevContact) => {
  return [...prevContact, newContact]
    })
  })
  
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact)=> contact.id !== contactId)
    })
  }



  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className='app'>
      <h1>Phonebook</h1>
      <ContactForm onAdd ={addContact} />
      <SearchBox value={filter} onFilter={ setFilter } />
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
    </div>)
};


export default App
