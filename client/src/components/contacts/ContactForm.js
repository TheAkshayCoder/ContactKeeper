import React,{useContext, useState, useEffect} from 'react'
import contactContext from '../../context/contact/contactContext'


const ContactForm = () => {
  const ContactContext = useContext(contactContext)

    const [contact,setContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:''
    })

    useEffect(()=>{
      if (ContactContext.current!==null){
          setContact(ContactContext.current)
      }else{
        setContact({
          name:'',
          email:'',
          phone:'',
          type:''
        })
      }
  },[ContactContext.current,ContactContext])

    const {name,email,phone,type} = contact

    const onChange=e=>setContact({...contact,[e.target.name]:e.target.value});
    const onClear = ()=>ContactContext.clearCurrent()

    const onSubmit = e =>{
      e.preventDefault();
      if(ContactContext.current===null){
        ContactContext.addContact(contact)
        setContact({
          name:'',
          email:'',
          phone:'',
          type:'personal'
        })
      }else{
        ContactContext.updateCurrent(contact)
       ContactContext.clearCurrent()
        setContact({
          name:'',
          email:'',
          phone:'',
          type:'personal'
        })
      }
      
    }

  return (
    <form onSubmit={onSubmit}>
        <h2 className='text-primary'>{ContactContext.current?'Edit Contact':'Add Contact'}</h2>
        <input type="text" placeholder='Name' name='name' value={name} onChange={onChange}/>
        <input type="email" placeholder='Email' name='email' value={email} onChange={onChange}/>
        <input type="number" placeholder='Phone' name='phone' value={phone} onChange={onChange}/>
        <h5>Contact Type</h5>
        <input type="radio" name="type" value="personal" onChange={onChange} defaultChecked={type==='personal'}/>Personal {' '}
        <input type="radio" name="type" value="professional" onChange={onChange} defaultChecked={type==='professional'}/>Professional {' '}
        <div>
            <input type='submit' value={ContactContext.current?'Update Contact':'Add Contact'} className='btn btn-primary btn-block'/>
        </div>
        <div>{ContactContext.current?<button className='btn btn-light btn-block' onClick={onClear}>Clear</button>:null}
          
        </div>
    </form>
  )
}

export default ContactForm