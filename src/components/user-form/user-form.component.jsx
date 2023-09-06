import './user-form.styles.scss'
import { useState, useContext } from 'react'
import FormInput from '../form-input/form-input.component'
import { createUserDocument } from '../../utils/firebase.utils'
import { useNavigate } from 'react-router-dom'
import {UserDetailsContext} from '../../contexts/details.context'
import Confirmation from '../confirmation/confirmation.component'


const UserForm=()=>{
    
    const defaultFormFields={
        nickname:'',
        email: ''
    }

    const {updateDetails}= useContext(UserDetailsContext)

    const [formFields,setFormFields]=useState(defaultFormFields)
    const {nickname, email}=formFields

    const navigate=useNavigate()

    const createUniqueId=(length)=> {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
        let code = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          code += characters.charAt(randomIndex);
        }
      
        return code;
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();  //prevents default behaviors for the event

        try{
            const id=createUniqueId(50);
            if(!await createUserDocument (nickname, email, id)){ // creates the user document if they dont exist.if they exist return
                setFormFields(defaultFormFields);
                //console.log('return')
                return
            }; 
            const userDetails={nickname: nickname, email: email, id:id}
            setFormFields(defaultFormFields);  //clears form fields setting them to default
            updateDetails(userDetails)
            navigate('/confirmation')
            //console.log(userDetails)
            
        }
        catch(error){
                console.log('user creation error', error);  // for any other generic error alert user
                alert('user creation error', error);
        }
    }

    const onChangeHandler=()=>{
        const {name, value}=event.target
        setFormFields({...formFields, [name]:value})
    }
    return(
        <div className='user-form-container'>
            <form onSubmit={handleSubmit}>
            <span className='span'>The details will be safely stored in our database until the extraction day and afterward be deleted. Your email will NOT be shared with any third-parties.</span>
                <FormInput label='Nickname' type='text' name='nickname' value ={nickname} onChange={onChangeHandler} required/>
                <FormInput label='Email' type='email' name='email' value ={email} onChange={onChangeHandler} required/>

                <button className='submit-button'>Submit</button>

            </form>

        </div>
    )
}

export default UserForm