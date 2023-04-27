import React from 'react'
import { Link } from 'react-router-dom'

const ContactDetails = (props) => {
    // const {name, email} = props.location.state.contact;
  return (
    <div className='main' style={{marginTop: '50px'}}>
        <div className='ui card centered'>
            <div className='image'>
                <img src='https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' alt='user' />
            </div>
            <div className='content'>
                <div className='header'>John Doe</div>
                <div className='description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos.
            </div>
            </div>
        </div>

        <div className='center-div'>
            <Link to='/'>
            <button className='ui button blue center'>Back to Contact List</button>
            </Link>
        </div>

    </div>
  )
}

export default ContactDetails