import './user-form.styles.scss'
import './lottery-selector.styles.scss'
import { useState, useContext, Fragment } from 'react'
import FormInput from '../form-input/form-input.component'
import { createUserDocument } from '../../utils/firebase.utils'
import { useNavigate } from 'react-router-dom'
import {UserDetailsContext} from '../../contexts/details.context'
import {enableButtonContext} from '../../contexts/enable-submission.context'



const UserForm=()=>{
    
    const defaultFormFields={
        nickname:'',
        email: ''
    }

    const maxNumbers = 30;
    const maxSelection = 6;
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [message, setMessage] = useState('');
  

    const {updateDetails}= useContext(UserDetailsContext)
    const {buttonEnabled, disableButton}=useContext(enableButtonContext)
    

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

    const handleNumberClick = (number) => {
    
        if (selectedNumbers.includes(number)) {
          // If the number is already selected, remove it.
          setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
        } else if (selectedNumbers.length < maxSelection) {
          // If less than 6 numbers are selected, add the number.
          setSelectedNumbers([...selectedNumbers, number]);
          setMessage('')
        } else {
          setMessage('You can only select 6 numbers.');
        }
      };

      console.log(selectedNumbers)
      const renderNumbers = () => {
        const numbers = [];
        for (let i = 1; i <= maxNumbers; i++) {
          const isSelected = selectedNumbers.includes(i);
          const className = isSelected ? 'selected' : '';
          numbers.push(
            <div
              key={i}
              className={`number ${className}`}
              onClick={() => handleNumberClick(i)}
            >
              {i}
            </div>
          );
        }
        return numbers;
      };
    

    const handleSubmit=async(event)=>{
        event.preventDefault();  //prevents default behaviors for the event

        if(selectedNumbers.length<maxSelection){
            alert('Please select 6 numbers')
            console.log(selectedNumbers)
            return
        }

        try{
            const id=createUniqueId(30);
            if(!await createUserDocument (nickname, email, id, selectedNumbers)){ // creates the user document if they dont exist.if they exist return
                setFormFields(defaultFormFields);
                //console.log('return')
                return
            }; 
            const userDetails={nickname: nickname, email: email, numbers:selectedNumbers.join(', '), id:id}
            setFormFields(defaultFormFields);  //clears form fields setting them to default
            updateDetails(userDetails)
            disableButton();
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
        <div>
            <div className="lottery-selector">
                <h1>Please, select 6 Numbers </h1>
                <div className="number-container">{renderNumbers()}</div>
                    <p className="message">{message}</p>
                <div className="selected-numbers">
                <h2>Selected Numbers:</h2>
            <p>{selectedNumbers.join(', ')}</p>
        </div>
        </div>
        <div className='user-form-container'>
            <form onSubmit={handleSubmit}>
            <span className='span'>The details will be safely stored in our database until the extraction day and afterward be deleted. Your email will NOT be shared with any third-parties.</span>
                <FormInput label='Nickname' type='text' name='nickname' value ={nickname} onChange={onChangeHandler} required/>
                <FormInput label='Email' type='email' name='email' value ={email} onChange={onChangeHandler} required/>

                <button className='submit-button' disabled={buttonEnabled}>Submit</button>

            </form>

        </div>

        </div>
    )
}

export default UserForm