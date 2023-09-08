import './ad-page.styles.scss'
import { enableButtonContext } from '../../contexts/enable-submission.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const AdPage=()=>{
    const{enableButton}=useContext(enableButtonContext);
    const navigate=useNavigate()

    const handleOnClick=()=>{
        enableButton()
        navigate('/user-form-sub')
    }


    return(
        <div className='ad-page-container'>
            <h1>Click on the Ad</h1>
            <span>Click on the ad below and you will be able to enter your details for the prize draw</span>
            <div className='ad-container'>
                <button onClick={handleOnClick}>Click</button>
            </div>
        </div>
    )
}

export default AdPage