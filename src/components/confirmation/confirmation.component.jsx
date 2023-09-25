import './confirmation.styles.scss'
import {UserDetailsContext} from '../../contexts/details.context'
import { useContext } from 'react'
import {_EXTRACTION_DATE_DAY, _EXTRACTION_DATE_YEAR,_EXTRACTION_DATE_TIME, _EXTRACTION_DATE_MONTH} from '../../var/var'
import { useData } from '../../contexts/data.context'
import TicketGenerator from '../ticket-generator/ticket-generator.component'

const Confirmation=()=>{
    useData()
    const {userDetails}=useContext(UserDetailsContext)
    
    return(
        <div>
            <h2>Congratulations, you successfully registered for the prize draw of the {_EXTRACTION_DATE_DAY} {_EXTRACTION_DATE_MONTH} {_EXTRACTION_DATE_YEAR} at {_EXTRACTION_DATE_TIME} GMT</h2>

            <h3>Your details</h3>
            <div className='details-container'>
                <span className='span'>
                    Nickname:  {userDetails.nickname}
                </span>
                <span className='span'>
                    ID:  {userDetails.id}
                </span>
                <span className='span'>
                    Email:  {userDetails.email}
                </span>
                <span className='span'>
                    Your Numbers:  {userDetails.numbers}
                </span>
            </div>
            <TicketGenerator ticketDetails={userDetails}/>
        </div>
    ) 
}

export default Confirmation