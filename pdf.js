const { PDFDocument, StandardFonts, rgb } = PDFLib
//fetch json values
fetch('flights.json')
.then(response => response.json())
.then(data => set_value(data));

function set_value(data){
  // set value in local Storage
  localStorage.setItem("val7",data[flight_id].origin);
  localStorage.setItem("val8",data[flight_id].destination);
  localStorage.setItem("val9",data[flight_id].departTime);
  localStorage.setItem("val10",data[flight_id].ArrivalTime);
  localStorage.setItem("val11",data[flight_id].price);
}
    async function createPdf() {
      // Create a new PDFDocument
      const pdfDoc = await PDFDocument.create()

      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
      const helv = await pdfDoc.embedFont(StandardFonts.HelveticaOblique)
      // Add page
      const page = pdfDoc.addPage()

      const { width, height } = page.getSize()
      // get data from local storage
      let val=localStorage.getItem("textvalue0");
      let val1=localStorage.getItem("textvalue1");
      let val2=localStorage.getItem("textvalue2");
      let val3=localStorage.getItem("textvalue3");
      let val4=localStorage.getItem("textvalue4");
      let val5=localStorage.getItem("textvalue5");
      let val6=localStorage.getItem("textvalue6");
      let val7=localStorage.getItem("val7");
      let val8=localStorage.getItem("val8");
      let val9=localStorage.getItem("val9");
      let val10=localStorage.getItem("val10");
      let val11=localStorage.getItem("val11");
  
      let cp=localStorage.getItem("cp");
      // Draw a string of text toward the top of the page
      if(cp === '2'){
        // Content for ticket
      title = "LetsGO! Airlines";
      subtitle = "Thank you for flying with LetsGO. We hope to make your trip memorable."
      str1 =  val7 + " to " + val8 ;
      str2 ="Departure: \n" + String(Date(val9)) + "\n" + "Arrival: \n" + String(Date(val10));
      str3="Name of Passenger 1: " + val + " " + val1+"\n" + "Age: " + val2 + "\n" + "E-mail: " + val3 + "\n";
      str4="Name of Passenger 2: " + val4 + " " + val5+"\n" + "Age: " + val6 + "\n";
      str5="Total amount: " + val11*2;
      const fontSize = 20
      // funtions for printing content
      page.drawText(title, {
        x: 50,
        y: height - 4 * fontSize,
        size: 40,
        font: timesRomanFont,
        color: rgb(0,0,0)
      })
      page.drawText(subtitle, {
        x: 50,
        y: height - 6 * fontSize,
        size: 10,
        font: helv,
        color: rgb(0,0,0)
      })
      page.drawText(str1, {
        x: 50,
        y: height - 8 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0,0,0)
      })
      page.drawText(str2, {
        x: 50,
        y: height - 10 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0,0,0)
      })
      page.drawText(str3, {
        x: 50,
        y: height - 16 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0,0,0)
      })
      page.drawText(str4, {
        x: 50,
        y: height - 20 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0,0,0)
      })
      page.drawText(str5, {
        x: 50,
        y: height - 24 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0,0,0)
      })
      const pdfBytes = await pdfDoc.save()

			// Trigger download the PDF ticket
      download(pdfBytes, "Ticket", "application/pdf");
    }
    else
    {
      // Content for ticket
      title = "LetsGO! Airlines";
      subtitle = "Thank you for flying with LetsGO. We hope to make your trip memorable."
      str1 =  val7 + " to " + val8 ;
      str2 ="Departure: \n" + String(Date(val9)) + "\n" + "Arrival: \n" + String(Date(val10));
      str3="Name of Passenger: " + val + " " + val1+"\n" + "Age: " + val2 + "\n" + "E-mail: " + val3 + "\n";
      str4="Total amount: " + val11;
      const fontSize = 20
      // funtions for printing content
      page.drawText(title, {
        x: 50,
        y: height - 4 * fontSize,
        size: 40,
        font: timesRomanFont,
        color: rgb(0,0,0)
      })
      page.drawText(subtitle, {
        x: 50,
        y: height - 6 * fontSize,
        size: 10,
        font: helv,
        color: rgb(0,0,0)
      })
      page.drawText(str1, {
        x: 50,
        y: height - 8 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0,0,0)
      })
      page.drawText(str2, {
        x: 50,
        y: height - 10 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0,0,0)
      })
      page.drawText(str3, {
        x: 50,
        y: height - 16 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0,0,0)
      })
      page.drawText(str4, {
        x: 50,
        y: height - 20 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0,0,0)
      })
      const pdfBytes = await pdfDoc.save()

			// Trigger to download the ticket PDF 
      download(pdfBytes, "Ticket.pdf", "application/pdf");
    }
    }