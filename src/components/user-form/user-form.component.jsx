import './user-form.styles.scss'
import { useState } from 'react'
import FormInput from '../form-input/form-input.component'


const UserForm=()=>{
    
    const defaultFormFields={
        nickname:'',
        email: ''
    }

    const [formFields,setFormFields]=useState(defaultFormFields)
    const {nickname, email}=formFields

    const onChangeHandler=()=>{
        const {name, value}=event.target
        setFormFields({...formFields, [name]:value})
    }

    return(
        <div className='user-form-container'>
            <form>
            <span className='span'>The details will be safely stored in our database until the extraction day and afterward be deleted. Your email will NOT be shared with any third-parties.</span>
                <FormInput label='Nickname' type='text' name='nickname' value ={nickname} onChange={onChangeHandler} required/>
                <FormInput label='Email' type='email' name='email' value ={email} onChange={onChangeHandler} required/>

                <button className='submit-button'>Submit</button>

            </form>

        </div>
    )
}

export default UserForm