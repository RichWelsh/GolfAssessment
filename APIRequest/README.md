# APIRequest

API Request
1.	Import the https module: const https = require('https');

2.	Define request options:
    o	const options = { ... }; - Sets the request options:
            hostname: The hostname of the API (swapi.dev).
            port: The port number (443 for HTTPS).
            path: The path to the API endpoint (/api/planets).
            method: The HTTP method (GET).

3.	Create a request:
    o	const req = https.request(options, (res) => { ... }); - Creates an HTTPS request object with the specified options.
    o	The callback function (res) => { ... } is executed when the request receives a response.
    o	res: Represents the incoming response.

4.	Handle response data:
    o	res.on('data', (chunk) => { ... }); - Listens for incoming data chunks.
    o	data += chunk; - Appends each chunk to the data variable.
    o	res.on('end', () => { ... }); - Listens for the end of the response.
    o	const planets = JSON.parse(data).results; - Parses the response data as JSON and extracts the results array.
    o	console.log('Planets:', planets); - Logs the array of planets to the console.

5.	Handle errors:
    o	req.on('error', (error) => { ... }); - Listens for any errors during the request.
    o	console.error('Error fetching planets:', error); - Logs any error to the console.

6.	Send the request:
    o	req.end(); - Sends the request to the server.