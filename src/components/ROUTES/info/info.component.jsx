import { useState } from 'react'
import QuestionToggler from '../../question-toggler/question-toggler.component'
//import './info.styles.scss'

const Info=()=>{

    return(
        <div className='info-container'>
            <QuestionToggler
                question='What is Felix Win?'
                answer='Felix Win is a simple online lottery available to everyone in the world. The amount of money available is entirely dependent on the amount of people visiting the website and it will be added to the jackpot every time you click on an ad.'
            />

            <QuestionToggler
                question='How does it work?'
                answer='To enter the prize draw, all you have to do is go to the homepage, click the "Click Here to Start" button, click on the ad and finally enter your details in the form provided.'
            />

            <QuestionToggler
                question='What details will I need to provide?'
                answer='In oreder to be considered for the prize draw, we will need to submit your email and a nickname. These details will be safely stored in our database until the extraction day and subsequently deleted. We will NOT share your personal email with any third-party websites.'
            />

            <QuestionToggler
                question='What happens after the extraction?'
                answer='After the extraction day, our team will personally contact the winner to discuss the form of payment.'
            />

            <QuestionToggler
                question='How are payments carried out?'
                answer='We would normally prefer to send the money via bank transfer, however, in certain cases it is possible to receive the cash via mail. If you decide the latter, make sure to provide us with the correct shipping details as we will be unable to provide refunds or re-send the money.'
            />

            <QuestionToggler
                question='Contact us'
                answer='if you have any question, please get in touch at: EMAIL'
            />
        </div>
    )
}

export default Info;