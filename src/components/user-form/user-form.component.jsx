import './user-form.styles.scss'
import { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import { createUserDocument } from '../../utils/firebase.utils'


const UserForm=()=>{
    
    const defaultFormFields={
        nickname:'',
        email: ''
    }

    const [formFields,setFormFields]=useState(defaultFormFields)
    const {nickname, email}=formFields

    const handleSubmit=async(event)=>{
        event.preventDefault();  //prevents default behaviors for the event

        try{
            await createUserDocument (nickname, email); // creates the user document
            setFormFields(defaultFormFields);  //clears form fields setting them to default
            //console.log(response)
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