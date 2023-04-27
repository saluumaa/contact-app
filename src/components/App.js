import React from 'react'
import Header from  './Header'
import AddContact from  './AddContact'
import ContactList from  './ContactList'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
    const [contacts, setContacts] = useState(getInitialContact())

    const addContactHandler = (contact) => {
        console.log(contact)
        setContacts([...contacts, {id: uuidv4(), ...contacts}])
    }

    function getInitialContact() {
        const temp = localStorage.getItem('contacts');
        const savedContacts = JSON.parse(temp);
        return savedContacts || [];
      }

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

  return (
    <div className='ui container'>
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} />
    </div>
  )
}

export default App