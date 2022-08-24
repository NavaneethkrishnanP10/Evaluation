function display_cards(flight_det){

    const countflights = Object.keys(flight_det).length; //total number of flights 
    console.log(countflights);
    let content = '';

    for(let count=0; count<countflights; count++){
        let flight = flight_det[count];
        const departure = new Date(flight.departTime)
        const arrival = new Date(flight.ArrivalTime)
    
        content +=  `
        <div class="card bg-info" >
        <div class="card-body"><h6>${flight_det[count]['flightNum']}</h6>
            <h4>${flight_det[count]['origin']}</h4><h5> to </h5><h4> ${flight_det[count]['destination']}</h4>
            <h6>Departure:</h6><h5>${departure.toUTCString()}</h5>
            <h6>Arrival:</h6><h5>${arrival.toUTCString()}</h5>
            <h2> ₹ ${flight_det[count]['price']}</h2>
            <button type="button" class="btn btn-primary"  id="flight${flight_det[count]['id']}" onclick="window.location.href='bookingPage.html'; get_flight_details(${flight_det[count]['id']});">Proceed</button>
        </div>
    </div>`
    }

    document.querySelector("#card-collection").innerHTML = content;
}

fetch('flights.json')
.then(response => response.json())
.then(data => display_cards(data));

function getflightdetails(flightid){
    localStorage.setItem("flightid",flightid);
}