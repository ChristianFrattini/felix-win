import './ad-page.styles.scss'
import { enableButtonContext } from '../../contexts/enable-submission.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Ad from '../ad/ad.component';

const AdPage=()=>{
    const{enableButton}=useContext(enableButtonContext);
    const navigate=useNavigate()

    const handleOnClick=()=>{
        enableButton()
        navigate('/user-form-sub')
    }


    return(
        
     
                <button onClick={handleOnClick}> Click</button>
  
    )
}

export default AdPage