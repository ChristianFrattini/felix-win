import './ad-page.styles.scss'

const AdPage=()=>{
    return(
        <div className='ad-page-container' onClick={alert('clicked')}>
            <h1>Click on the Ad</h1>
            <span>Click on the ad below and you will be able to enter your details for the prize draw</span>
            <div className='ad-container'>
                <button>lo</button>
            </div>
        </div>
    )
}

export default AdPage