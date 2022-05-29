import React, {useReducer} from "react";
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import { v4 } from 'uuid';
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
            },
        ],
        current:null,
        filtered:null
    }
    const [state,dispatch] = useReducer(contactReducer,IntialState)

    // Add contact 
    const addContact = contact =>{
        contact.id = v4()
        dispatch({type:ADD_CONTACT,payload:contact});
    };

    // Delete contact
    const deleteContact = (id)=>{
        dispatch({type:DELETE_CONTACT,payload:id});
    }

    // Set current contact 
    const setCurrent = (contact)=>{
        dispatch({type:SET_CURRENT,payload:contact})
    }
    // Clear current contact
    const clearCurrent = ()=>{
        dispatch({type:CLEAR_CURRENT})
    }
    // Update contact
    const updateCurrent = (contact)=>{
        dispatch({type:UPDATE_CONTACT,payload:contact})
    }
    // Filter contact
    const filterContacts = (text)=>{
        dispatch({type:FILTER_CONTACTS,payload:text})
    }
    // Clear contact

    // Clear Filter

    return (
        <contactContext.Provider value={{contacts:state.contacts,current:state.current,filtered:state.filtered,addContact,deleteContact,setCurrent,clearCurrent,updateCurrent, filterContacts}}>
            {props.children}
        </contactContext.Provider>
    )
}


export default ContactState;