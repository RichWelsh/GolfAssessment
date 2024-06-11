//API Request

//Import the https module
const https = require('https');

//Define request options
const options = {
    hostname: 'swapi.dev',
    port: 443,
    path: '/api/planets',
    method: 'GET'
};

//Create a request
const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => { //Listens for incoming data chunks
        data += chunk; //Appends each chunk to the data variable
    });

    res.on('end', () => { //Listens for the end of the response
        const planets = JSON.parse(data).results //Parses the response data as JSON and extracts the results array
        
        console.log('Planets:', planets); //- Logs the array of planets to the console.
    });
});

req.on('error', (error) => { //Listens for any errors during the request.
    console.error('Error fetching planets:', error); //Logs any error to the console
});

req.end();
