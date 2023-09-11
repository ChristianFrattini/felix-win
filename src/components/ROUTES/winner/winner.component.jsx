import { _EXTRACTION_DATE, _ID, _NICKNAME } from '../../../var/var'
import './winner.styles.scss'

const WinnerPage=()=>{
    return(
        <div>
            <h1>Winner</h1>
            <h2>The winner for the draw of the {_EXTRACTION_DATE} is:</h2>
            <h2>Nickname: {_NICKNAME}</h2>
            <h2>ID: {_ID}</h2>
        </div>
    )
}

export default WinnerPage