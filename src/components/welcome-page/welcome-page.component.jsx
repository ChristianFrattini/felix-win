import './welcome-page.styles.scss'

const WelcomePage=()=>{
    return(
        <div className='welcome-info-container'>
            <div className='welcome-container'>
                <h1 className='welcome'>Welcome to the Website</h1>
            </div>
            <div className='introduction-container'>
                <span className='span-info'>Please read the info panel before entering for the prize draw</span>
            </div>
            <div className='button-container'>
                <button>Click Here</button>
            </div>
        </div>
    )
}

export default WelcomePage