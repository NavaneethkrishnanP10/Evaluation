let flight_id=localStorage.getItem("flightid");
let val=localStorage.getItem("textvalue0");
let val1=localStorage.getItem("textvalue1");
let val2=localStorage.getItem("textvalue2");
let val3=localStorage.getItem("textvalue3");
let val4=localStorage.getItem("textvalue4");
let val5=localStorage.getItem("textvalue5");
let val6=localStorage.getItem("textvalue6");

let countPassenger=localStorage.getItem("cp");
flight_id-=1;
let content1='';
let content2='';
function display_value(data)
{
            
    console.log(countPassenger);
    if(countPassenger === "2")
    {
        departure=new Date(data[flight_id].departTime);
        arrival=new Date(data[flight_id].ArrivalTime);

        content1 +=  `
        <div class="details" >
        <div class="card-header">Passenger details </div>
        <div class="card-body">
                <h5 class="card-title"> Name:<br>${val} ${val1}</h5>
                <h4> Age:${val2} </h4>
                <h4> Email:${val3}</h4>
                <h5 class="card-title"> Name:<br>${val4} ${val5}</h5>
                <h4> Age:${val6} </h4>
        </div>        
        </div>`

        content2 +=  `
        <div class="details1" >
        <div class="card-header">Flight details </div>
        <div class="card-body">
                <h4> ${data[flight_id].flightNum}</h4>
                <h4>Origin: <span> ${data[flight_id].origin}</span></h4>
                <h4>Destination: <span> ${data[flight_id].destination}</span></h4>
                <h4>Departure:<br> <span>${departure.toUTCString()} </span></h4>
                <h4>Arrival:<br> <span>${arrival.toUTCString()} </span></h4>
                <h4>Price: <span> &#8377;${data[flight_id].price*2}</h4>
                </div>
        </div>`

        document.querySelector("#card-collection1").innerHTML = content1;
        document.querySelector("#card-collection2").innerHTML = content2;
     }
     else
     {
        departure=new Date(data[flight_id].departTime);
        arrival=new Date(data[flight_id].ArrivalTime);
        
        content1 +=  `
        <div class="details" >
        <div class="card-header">Passenger details </div>
        <div class="card-body">
                <h4> Name:<br>${val} ${val1}</h4>
                <h4> Age:${val2} </h4>
                <h4> Email:${val3}</h4>
                </div>
        </div>`

        content2 +=  `
        <div class="details1" >
        <div class="card-header">Flight details </div>
        <div class="card-body">
                <h4> ${data[flight_id].flightNum}</h4>
                <h4>Origin: <span> ${data[flight_id].origin}</span></h4>
                <h4>Destination: <span> ${data[flight_id].destination}</span></h4>
                <h4>Departure:<br> <span>${departure.toUTCString()} </span></jh4>
                <h4>Arrival:<br> <span>${arrival.toUTCString()} </span></h4>
                <h4>Price: <span> &#8377;${data[flight_id].price}</h4>
                </div>
        </div>`

        document.querySelector("#card-collection1").innerHTML = content1;
        document.querySelector("#card-collection2").innerHTML = content2;
     }
}
fetch('flights.json')
.then(response => response.json())
.then(data => display_value(data));
