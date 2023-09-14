import './ad-page.styles.scss'
import { enableButtonContext } from '../../contexts/enable-submission.context'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { _EXTRACTION_DATE_DAY, _EXTRACTION_DATE_YEAR,_EXTRACTION_DATE_TIME, _EXTRACTION_DATE_MONTH, databaseDataFetching, _EXTRACTION_DATE_ISO } from '../../var/var'
import { useData } from '../../contexts/data.context'
import Ad from '../ad/ad.component';
import CountdownTimer from '../countdown-timer/countdown-timer.component';

const InfoPreview=()=>{
    const{enableButton}=useContext(enableButtonContext);
    const navigate=useNavigate()
    const [isChecked, setIsChecked]=useState(false)
    useData()



    const handleOnClick=()=>{
        enableButton()
        navigate('/user-form-sub')
    }

    const handleOnChange=()=>{
        setIsChecked(!isChecked)
    }


    return( 
    <div className='container'>
        <h3 className='h3-info'>The extraction date is currently set on the {_EXTRACTION_DATE_DAY} {_EXTRACTION_DATE_MONTH} {_EXTRACTION_DATE_YEAR} at {_EXTRACTION_DATE_TIME} GMT</h3>
        <CountdownTimer targetDate={_EXTRACTION_DATE_ISO}/>
        <span className='span-info'>First time on our website? Please read the info panel at the top-right corner before entering for the prize draw.</span>

        <label className='checkbox-label'>
            <input type='checkbox' checked={isChecked} onChange={handleOnChange}/>
                I have read the information panel and want to proceed with entering the details.
        </label>
        
        <button className={`submit-button ${isChecked ? '' : 'disabled'}`} onClick={handleOnClick} disabled={!isChecked}>Submit your details here</button>
  
    </div>
           
    )
}

export default InfoPreview