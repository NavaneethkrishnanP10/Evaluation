function display_cards(flight_det){
    const number_of_flights = Object.keys(flight_det).length; //number of flights in the json
    console.log(number_of_flights);
    let content = '';
    for(let count=0;count<number_of_flights;count++){
        let flight = flight_det[count];

        //let flight_num = new Date(flight.flightNum)
        const departure = new Date(flight.departTime)
        const arrival = new Date(flight.ArrivalTime)
        //let flight_from = new Date(flight.origin)
        //let flight_to = new Date(flight.destination)
        //let fare = new Date(flight.price)

        content +=  `
        <div class="card bg-info" >
        <div class="card-body"><h6>${flight_det[count]['flightNum']}</h6>
            <h4>${flight_det[count]['origin']}</h4><h5> to </h5><h4> ${flight_det[count]['destination']}</h4>
            <h6>Departure:</h6><h5>${departure.toUTCString()}</h5>
            <h6>Arrival:</h6><h5>${arrival.toUTCString()}</h5>
            <h2> ₹ ${flight_det[count]['price']}</h2>
            <button type="button" class="btn btn-primary"  id="flight${flight_det[count]['id']}" onclick="window.location.href='bookingPage.html'; get_flight_details(${flight_det[count]['id']});">Proceed</button>
        </div>
    </div>
    
    `

    }
    document.querySelector("#card-collection").innerHTML = content;
}

fetch('flights.json')
.then(response => response.json())
.then(data => display_cards(data));

function get_flight_details(flightid){
    localStorage.setItem("flightid",flightid);
}