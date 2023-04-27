import React from 'react'
import { Link } from 'react-router-dom'
import user from '../assets/user.png'

const ContactCard = (props) => {
    const {id, name, email} = props.contact
  return (
        <div className='item' key={id}>
            <img className='ui avatar image' src={user} alt='user' />
        <div className='content'>
        <Link to={`/contact/${id}`}>
            <div className='header'>{name}</div>
            <div>{email}</div>
        </Link>
        </div>
        <i className='trash alternate outline icon'
        style={{color: 'red', marginTop: '7px', float: 'right' }}
        onClick={() => props.clickHandler(id)} ></i>
    </div>
  )
}

export default ContactCard