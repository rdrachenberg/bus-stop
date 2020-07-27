function getInfo() {
    let stopId = document.getElementById('stopId').value; // get the value of the input id stopId

    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`; // declare url var for request as string literal with stopId var being passed in
    fetch(url).then(function(response){
            let busesSelect = document.getElementById('buses');
            busesSelect.innerHTML = '';

        if(response.ok){
            response.json().then(function(buses){
                
                // console.log(buses.name); // name 

                let stopName = document.getElementById('stopName');
                stopName.textContent = buses.name;

                let actualBusId = Object.keys(buses.buses);
                let times = Object.values(buses.buses);

                // console.log(actualBusId.length);

                for(let i = 0; i < actualBusId.length; i++ ) {
                    let busesSelect = document.getElementById('buses');
                    let li = document.createElement('li');

                    li.textContent = `Bus ${actualBusId[i]} arrives in ${times[i]}`;
                    busesSelect.appendChild(li);
                }
            });
        } else {
            let stopName = document.getElementById('stopName');
            stopName.innerText = 'Error';
        }
        
    });
    document.getElementById('stopId').value = '';
}