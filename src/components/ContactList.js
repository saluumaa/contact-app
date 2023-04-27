import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    const renderContactlist = props.contacts.map((contact) => {
  return (
    <ContactCard contact={contact} />
    )})

    return (
    <div>
        <div className='ui celled list'>
            {renderContactlist}
        </div>
    </div>
    )

}


export default ContactList