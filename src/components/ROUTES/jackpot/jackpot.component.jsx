import './jackpot.styles.scss'
import  {_EXTRACTION_DATE_DAY, _EXTRACTION_DATE_YEAR,_EXTRACTION_DATE_TIME, _EXTRACTION_DATE_MONTH, _JACKPOT, databaseDataFetching}  from '../../../var/var';
import CurrencyConverter from '../../currency-converter/currency-converter.component';
import { useEffect } from 'react';
import { useData } from '../../../contexts/data.context';

const Jackpot=()=>{

   useData()
    return (
        <div>
            <div>
                <h2>Jackpot</h2>
                <h3>The current Jackpot is: </h3>
                <h2>£{_JACKPOT}</h2>
                <span>The next lottery draw is set on the {_EXTRACTION_DATE_DAY} {_EXTRACTION_DATE_MONTH} {_EXTRACTION_DATE_YEAR} at {_EXTRACTION_DATE_TIME} GMT </span>
            </div>
            <div>
                <CurrencyConverter initialAmount={_JACKPOT}/>
            </div>
        </div>
    )
}

export default Jackpot