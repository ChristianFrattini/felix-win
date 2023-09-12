import './confirmation.styles.scss'
import {UserDetailsContext} from '../../contexts/details.context'
import { useContext } from 'react'
import {_EXTRACTION_DATE_DAY, _EXTRACTION_DATE_YEAR,_EXTRACTION_DATE_TIME, _EXTRACTION_DATE_MONTH} from '../../var/var'


const Confirmation=()=>{

    const {userDetails}=useContext(UserDetailsContext)
    
    //const {nickname, email, id}=details
    
    return(
        <div>
            <h2>Congratulations, you successfully registered for the prize draw of the {_EXTRACTION_DATE_DAY} {_EXTRACTION_DATE_MONTH} {_EXTRACTION_DATE_YEAR} at {_EXTRACTION_DATE_TIME} GMT</h2>

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