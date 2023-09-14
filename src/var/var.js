import { useEffect } from "react";
import { getVar } from "../utils/firebase.utils";


let _JACKPOT=null; 
let _EXTRACTION_DATE_DAY;
let _EXTRACTION_DATE_TIME
let _EXTRACTION_DATE_MONTH;
let _EXTRACTION_DATE_YEAR;
let _WINNER_NICKNAME;
let _WINNER_ID;
let _EXTRACTION_DATE_ISO;

let isLoading=true;

// Use the function to access the data
export async function databaseDataFetching(){
const data = await getVar();
    

  _JACKPOT = (data.jackpot/10)*9; 
  _EXTRACTION_DATE_TIME= data.extraction_date_time
  _EXTRACTION_DATE_MONTH= data.extraction_date_month
  _EXTRACTION_DATE_DAY=data.extraction_date_day
  _EXTRACTION_DATE_YEAR=data.extraction_date_year
  _WINNER_NICKNAME=data.winner_nickname
  _WINNER_ID=data.winner_id
  _EXTRACTION_DATE_ISO=data.extraction_date_iso
    isLoading=false
    
}

databaseDataFetching();

// Export the variable so it's available for other modules
export { _JACKPOT, _EXTRACTION_DATE_DAY, _EXTRACTION_DATE_YEAR,_EXTRACTION_DATE_TIME, _EXTRACTION_DATE_MONTH,_WINNER_NICKNAME, _WINNER_ID, _EXTRACTION_DATE_ISO, isLoading };


