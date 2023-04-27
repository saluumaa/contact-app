import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from  './Header'
import AddContact from  './AddContact'
import ContactList from  './ContactList'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ContactDetails from './ContactDetails'

const App = () => {
    const [contacts, setContacts] = useState(getInitialContact())

    const addContactHandler = (contact) => {
        console.log(contact)
        setContacts([...contacts, {id: uuidv4(), ...contact}])
    }

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id
        })
        setContacts(newContactList)
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
        <Router>
         <Header />
        <Routes>
         <Route path='/' exact element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
         <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path='/contact/:id' element={<ContactDetails />} />
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
        </Router>
    </div>
  )
}

export default App