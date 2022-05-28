import React, {useReducer} from "react";
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer'
import { ADD_CONTACT,DELETE_CONTACT,SET_CURRENT,CLEAR_CURRENT,UPDATE_CONTACT,FILTER_CONTACTS,SET_ALERT,CLEAR_FILTER,REMOVE_ALERT} from "../types";

const ContactState = props =>{
    const IntialState = {
        contacts:[
            {
                id:1,
                name:'Akshay Thakur',
                email:'aks@gmail.com',
                phone:'9898989898',
                type:'personal'
            },
            {
                id:2,
                name:'Raj Aryan',
                email:'abc@gmail.com',
                phone:'9898989898',
                type:'personal'
            },
            {
                id:3,
                name:'Ajay Thakur',
                email:'aks@gmail.com',
                phone:'9898989898',
                type:'personal'
            }
        ]
    }
    const [state,dispatch] = useReducer(contactReducer,IntialState)

    // Add contact 
    const addContact = contact =>{
        contact.id = uuid.v4()
        dispatch({type:ADD_CONTACT,payload:contact});
    };

    const deleteContact = (id)=>{
        dispatch({type:DELETE_CONTACT,payload:id});
    }


    // Delete contact

    // Set current contact 

    // Clear current contact

    // Update contact

    // Filter contact

    // Clear contact

    // Clear Filter

    return (
        <contactContext.Provider value={{contacts:state.contacts,addContact,deleteContact}}>
            {props.children}
        </contactContext.Provider>
    )
}


export default ContactState;