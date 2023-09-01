import {useNavigate } from 'react-router-dom'
import './welcome-page.styles.scss'

const WelcomePage=()=>{

    const navigate=useNavigate()

    const onClickHandler=()=>{
        navigate('/clickad')
    }

    return(
        <div className='welcome-info-container'>
            <div className='welcome-container'>
                <h1 className='welcome'>Welcome to the Website</h1>
            </div>
            <div className='introduction-container'>
                <span className='span-info'>Please read the info panel before entering for the prize draw</span>
            </div>
            <div className='button-container'>
                <button className='homepage-button' onClick={onClickHandler}>Click Here to Start</button>
            </div>
        </div>
    )
}

export default WelcomePage