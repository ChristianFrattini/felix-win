import './currency-converter.styles.scss'
import { _JACKPOT } from '../../var/var';

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const API_URL= 'https://api.exchangeratesapi.io/v1/latest?access_key=b9c021bb4510b6921267e1ab31adc7ae&base=USD'


function CurrencyConverter({ initialAmount }) {
    const [exchangeRates, setExchangeRates] = useState({});
    const [convertedAmounts, setConvertedAmounts] = useState({});
    const selectedCurrencies = ['EUR', 'GBP', 'CHF', 'USD', 'SOL', 'BRL', 'BOB', 'KWD','BHD', 'OMR', 'TND', 'LYD', 'MAD', 'PHP','JPY','CNY', 'MXN']; // Replace with the currencies you want to display
  
    useEffect(() => {
      async function fetchExchangeRates() {
        try {
          const response = await axios.get(API_URL);
          setExchangeRates(response.data.rates);
        } catch (error) {
          console.error('Error fetching exchange rates:', error);
        }
      }
  
      fetchExchangeRates();
    }, []);
  
    useEffect(() => {
      calculateConversions();
    }, [initialAmount, exchangeRates]);
  
    function calculateConversions() {
      const conversions = {};
      selectedCurrencies.forEach((currency) => {
        const rate = exchangeRates[currency];
        if (rate !== undefined) {
          conversions[currency] = (initialAmount * rate).toFixed(3); // Keep 2 decimal places
        }
      });
      setConvertedAmounts(conversions);
    }
  
    return (
      <div className='currency-converter-container'>
        <h2>Currency Converter</h2>
        <ul>
          {Object.keys(convertedAmounts).map((currency) => (
            <li key={currency}>
              <span className='currency-code'>{currency}:</span> 
              <span className='converted-amount'>{convertedAmounts[currency]}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default CurrencyConverter;