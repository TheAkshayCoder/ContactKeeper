import React,{useContext} from 'react'
import PropTypes from 'prop-types' 
import contactContext from '../../context/contact/contactContext'

const ContactItem = (props) => {
    // const {name,email,phone,type} = props;
    const ContactContext = useContext(contactContext)

    const deleteContact =(id)=>{
        ContactContext.deletContact(id)
    }
  return (
    <div className='card bg-light'>
        <h3 className='text-primary text-left'>
            {props.name}{' '}<span style={{float:'right'}} className={'badge'+(props.type==='professional'?'badge-success':'badge-primary')}>{props.type.charAt(0).toUpperCase()+props.type.slice(1)}</span>
        </h3>
        <ul className='list'>
            {props.email&&(<li>
                <i className='fas fa-envelope-open'></i>{props.email}
            </li>)}
            {props.phone&&(<li>
                <i className='fas fa-phone'></i>{props.phone}
            </li>)}
        </ul>
        <p>
            <button className='btn btn-dark btn-sm'>Edit</button>
            <button className='btn btn-danger btn-sm' onClick={deleteContact}>Delete</button>
        </p>
    </div>
  )
}

// ContactItem.propTypes ={
//     props:PropTypes.object.isRequired
// }

export default ContactItem