import { useEffect } from "react";
import { getVar } from "../utils/firebase.utils";

//const data=getVar()
//console.log(data)
//export const _EXTRACTION_DATE='25th February at 16.00 GMT';
//export const _JACKPOT=100;





//export const _EXTRACTION_DATE='diocane';
//export const _JACKPOT=80000;

//export const _NICKNAME=data.winner_nickname;
//export const _ID=data.winner_id;
//export const _EXTRACTION_DATE=getVar().then((data) => {
    //console.log(data.extraction_date_time); // Access the 'jackpot' field
  //});


let _JACKPOT; 
let _EXTRACTION_DATE_DAY;
let _EXTRACTION_DATE_TIME
let _EXTRACTION_DATE_MONTH;
let _EXTRACTION_DATE_YEAR;
let _WINNER_NICKNAME;
let _WINNER_ID;

// Use the function to access the data
const resultPromise = getVar();

resultPromise.then((data) => {
  _JACKPOT = (data.jackpot/10)*9; 
  _EXTRACTION_DATE_TIME= data.extraction_date_time
  _EXTRACTION_DATE_MONTH= data.extraction_date_month
  _EXTRACTION_DATE_DAY=data.extraction_date_day
  _EXTRACTION_DATE_YEAR=data.extraction_date_year
  _WINNER_NICKNAME=data.winner_nickname
  _WINNER_ID=data.winner_id
});

// Export the variable so it's available for other modules
export { _JACKPOT, _EXTRACTION_DATE_DAY, _EXTRACTION_DATE_YEAR,_EXTRACTION_DATE_TIME, _EXTRACTION_DATE_MONTH,_WINNER_NICKNAME, _WINNER_ID };

