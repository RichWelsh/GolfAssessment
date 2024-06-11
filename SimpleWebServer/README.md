Simple Web Server
1.	Import the http module: const http = require('http');
2.	Create a server:
    o	const server = http.createServer((req, res) => { ... }); - Creates a new HTTP server.
    o	The callback function ((req, res) => { ... }) is executed for each incoming request.
    o	req: Represents the incoming request.
    o	res: Represents the response to be sent back.
3.	Handle requests:
    o	res.statusCode = 200; - Sets the status code to OK (200).
    o	res.setHeader('Content-Type', 'text/plain'); - Sets the content type to plain text.
    o	res.end('Hello, World!'); - Writes the response data (Hello, World!) and ends the response.
4.	Start listening on port 3000:
    o	server.listen(3000, () => { ... }); - Starts the server and listens on port 3000.
    o	The callback function is executed when the server is successfully listening.
    o	console.log('Server running at http://localhost:3000/'); - Prints a message indicating the server is running.



