import {useNavigate } from 'react-router-dom'
import './welcome-page.styles.scss'
import { _EXTRACTION_DATE_DAY, _EXTRACTION_DATE_YEAR,_EXTRACTION_DATE_TIME, _EXTRACTION_DATE_MONTH, databaseDataFetching } from '../../var/var'
import { useData } from '../../contexts/data.context'

const WelcomePage=()=>{
    useData()
    const navigate=useNavigate()

    const onClickHandler=()=>{
        navigate('/clickad')
    }

    return(
        <div className='welcome-info-container'>
            <div className='welcome-container'>
                <h1 className='welcome'>Welcome to FelixWin</h1>
            </div>
            <div className='introduction-container'>
                <h3 className='h3-info'>Welcome to Felix Win the lottery available to everyone in the world</h3>
                <span className='span-info'>Find out more in the Info panel on the top-right corner or click on 'Click Here to Start'</span>
            </div>
            <div className='button-container'>
                <button className='homepage-button' onClick={onClickHandler}>Click Here to Start</button>
            </div>
        </div>
    )
}

export default WelcomePage