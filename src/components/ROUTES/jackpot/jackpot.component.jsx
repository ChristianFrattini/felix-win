import './jackpot.styles.scss'
import  {_EXTRACTION_DATE, _JACKPOT}  from '../../../var/var';
import CurrencyConverter from '../../currency-converter/currency-converter.component';

const Jackpot=()=>{
    
    return (
        <div>
            <div>
                <h2>Jackpot</h2>
                <h3>The current Jackpot is: </h3>
                <h2>${_JACKPOT}</h2>
                <span>The next lottery draw is set on the {_EXTRACTION_DATE} </span>
            </div>
            <div>
                <CurrencyConverter initialAmount={_JACKPOT}/>
            </div>
        </div>
    )
}

export default Jackpot