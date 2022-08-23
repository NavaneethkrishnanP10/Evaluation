let flight_id=localStorage.getItem("flightid");
let val=localStorage.getItem("textvalue0");
let val1=localStorage.getItem("textvalue1");
let val2=localStorage.getItem("textvalue2");
let val3=localStorage.getItem("textvalue3");
flight_id-=1;
let content='';
function display_value(data)
{
    departure=new Date(data[flight_id].departTime);
    arrival=new Date(data[flight_id].ArrivalTime);
    content +=  `
    <div class="card bg-info" >
    <div class="card-body" >

            <h3> Passenger details </h3>
            
            <h4> Name:${val} ${val1}</h4>
            <h4> Age:${val2} </h4>
            <h4> Email:${val3}</h4>
                
            <h3> Flight details </h3>
            <h4> ${data[flight_id].flightNum}</h4>
            <h4>Origin: <span> ${data[flight_id].origin}</span></h4>
            <h4>Destination: <span> ${data[flight_id].destination}</span></h4>
            <h4>Departure: <span>${departure.toUTCString()} </span></h4>
            <h4>Arrival: <span>${arrival.toUTCString()} </span></h4>
            <h4>Price: <span> &#8377;${data[flight_id].price}</h4>
            </div>
    </div>`

document.querySelector("#card-collection").innerHTML = content;
}
fetch('flights.json')
.then(response => response.json())
.then(data => display_value(data));