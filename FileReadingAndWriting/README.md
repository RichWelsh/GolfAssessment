File Reading and Writing

This script will make a GET request to the SWAPI planets endpoint, receive the response data, parse it as JSON, and then print the list of planets to the console.

1.	Import the fs module: const fs = require('fs');

2.	Read input.txt:
    o	fs.readFile('input.txt', 'utf8', (err, data) => { ... }); - Reads the contents of input.txt in UTF-8 encoding.
    o	err: Contains any error that occurred during reading.
    o	data: Contains the file contents as a string.

3.	Handle reading errors:
    o	If err is not null, print an error message and return.

4.	Write to output.txt:
    o	fs.writeFile('output.txt', data, (err) => { ... }); - Writes the data (read from input.txt) to output.txt.
    o	err: Contains any error that occurred during writing.

5.	Handle writing errors:
    o	If err is not null, print an error message and return.

6.	Success message:
    o	If both reading and writing are successful, print a success message.


