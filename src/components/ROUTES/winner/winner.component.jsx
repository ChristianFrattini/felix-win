import { _WINNER_ID, _WINNER_NICKNAME, _WINNER_NUMBERS, _EXTRACTION_DATE_DAY, _EXTRACTION_DATE_YEAR,_EXTRACTION_DATE_TIME, _EXTRACTION_DATE_MONTH } from '../../../var/var'
import './winner.styles.scss'
import { useData } from '../../../contexts/data.context'

const WinnerPage=()=>{
    useData()
    return(
        <div>
            <h1>Winner</h1>
            <h2>The winner for the draw of the {_EXTRACTION_DATE_DAY} {_EXTRACTION_DATE_MONTH} {_EXTRACTION_DATE_YEAR} at {_EXTRACTION_DATE_TIME} GMT is:</h2>
            <h2>Nickname: {_WINNER_NICKNAME}</h2>
            <h2>Winning Numbers: {_WINNER_NUMBERS}</h2>
            <h2>ID: {_WINNER_ID}</h2>
            
        </div>
    )
}

export default WinnerPage