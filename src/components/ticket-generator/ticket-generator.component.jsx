import './ticket-generator.styles.scss'
import React from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import {_EXTRACTION_DATE_DAY, _EXTRACTION_DATE_YEAR,_EXTRACTION_DATE_TIME, _EXTRACTION_DATE_MONTH} from '../../var/var'




const TicketGenerator=({ticketDetails})=> {

  const generateTicket = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([500, 200]);
    const helveticaFont = await pdfDoc.embedFont('Helvetica');
    

     // Define line positions
     const line0X = 20;
     const line1X = 50;
     const line2X = 70;
     const line3X = 90;
     const line4X = 110;
     const line5X = 130;
     const line6X = 150;
 
     // Add text to the page in columns
     const nickname = ` Your Nickname: ${ticketDetails.nickname}`;
     const email = ` Your Email: ${ticketDetails.email}`;
     const numbers = ` Your Numbers: ${ticketDetails.numbers}`
     const id = ` Your ID: ${ticketDetails.id}`;
     const extraction_date= ` Draw date: ${_EXTRACTION_DATE_DAY} ${_EXTRACTION_DATE_MONTH} ${_EXTRACTION_DATE_YEAR} at ${_EXTRACTION_DATE_TIME} GMT`

     const fontSizeTitle=25
     const fontSizeDetails=14


    page.drawText('Your Felix Win Ticket', {
      x: 50,
      y: line6X,
      size: fontSizeTitle,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(nickname, {
        x: 50,
        y: line5X,
        size: fontSizeDetails,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      page.drawText(email, {
        x: 50,
        y: line4X,
        size: fontSizeDetails,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      page.drawText(numbers, {
        x: 50,
        y: line3X,
        size: fontSizeDetails,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      page.drawText(id, {
        x: 50,
        y: line2X,
        size: fontSizeDetails,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      page.drawText(extraction_date, {
        x: 50,
        y: line1X,
        size: fontSizeDetails,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      page.drawText('Thank you and good luck', {
        x: 150,
        y: line0X,
        size: fontSizeDetails,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

    const pdfBytes = await pdfDoc.save();

    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    const url = window.URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'your_ticket.pdf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button className='download-button' onClick={generateTicket}>Download your Ticket here</button>
    </div>
  );
}

export default TicketGenerator;
