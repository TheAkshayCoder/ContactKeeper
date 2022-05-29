import React, {Fragment,useContext} from 'react'
import contactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem';

const Contacts = () => {
    const ContactContext = useContext(contactContext);
    const {contacts,filtered} = ContactContext;
    
    const search = (e)=>{
      if(e.target.value!==''){  
        ContactContext.filterContacts(e.target.value)
      }
    }


  return (
    <Fragment>
      <input type='text' placeholder='Search' onKeyUp={search}/>
      {filtered!==null?(filtered.map((contact,i)=>{
          return <ContactItem key={i} id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} type={contact.type}/>
        })):(contacts.map((contact,i)=>{
          return <ContactItem key={i} id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} type={contact.type}/>
        }))}
    </Fragment>
  )
}

export default Contacts