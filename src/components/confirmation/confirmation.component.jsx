import './confirmation.styles.scss'
import {UserDetailsContext} from '../../contexts/details.context'
import { useContext } from 'react'


const Confirmation=()=>{

    const {userDetails}=useContext(UserDetailsContext)
    console.log(userDetails)
    //const {nickname, email, id}=details
    
    return(
        <div>
            <h2>Congratulations, you successfully registered for the prize draw of the _EXTRACTION_DATE</h2>

            <h3>Your details</h3>
            <div className='details-container'>
                <span className='span'>
                    nickname:  {userDetails.nickname}
                </span>
                <span className='span'>
                    id:  {userDetails.id}
                </span>
                <span className='span'>
                    email:  {userDetails.email}
                </span>
            </div>
            
        </div>
    )
}

export default Confirmation