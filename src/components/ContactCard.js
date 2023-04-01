import React from "react";

const ContactCard = (props) => {
    const {id, name, email} = props.contact
    return (
        <div className="item">
                <div className="content" style={{marginTop:'10px'}}>
                    <div className="header">
                        {name}
                    </div>
                    <div>{email}</div>
                </div>
                <i className="trash alternate outline icon"
                style ={{color:'red', marginBottom:'10px', marginTop:'-1.5rem', float:'right',}}></i>
                  
            </div>
    )
}

export default ContactCard