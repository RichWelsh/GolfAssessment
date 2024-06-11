const http = require('http'); //Import the http module

//Creates a new HTTP server
//req: Represents the incoming request.
//res: Represents the response to be sent back.
const server = http.createServer((req, res) => { 
    res.statusCode = 200; // OK = 200
    res.setHeader('Content-Type', 'text/plain'); //Sets the content type to plain text
    res.end('Hello, World!'); //Writes the response data (Hello, World!) and ends the response
});

//Starts the server and listens on port 3000.
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/'); //Prints a message indicating the server is running.
});