import React, {Fragment,useContext} from 'react'
import contactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem';

const Contacts = () => {
    const ContactContext = useContext(contactContext);
    const {contacts} = ContactContext;
    console.log(contacts)
    
  return (
    <Fragment>
        {contacts.map((contact,i)=>{
          return <ContactItem key={i} id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} type={contact.type}/>
        })}
    </Fragment>
  )
}

export default Contacts