//File Reading and Writing

const fs = require('fs'); //Import the fs (File System) module

var fileName = "input.txt"; //default name of input file

//Allows user to override default input file name via commend line parameter 
if (process.argv.length === 3) { //checks to see if parameter exists

    fileName = process.argv[2]; //override default
    console.log(fileName); //display new input file name
}

fs.readFile(fileName, 'utf8', (err, data) => { //reads file contents
    //read error handling
    if (err) {
        console.error("Unable to open file : %s", fileName, err);
        return;
    }

    fs.writeFile('output.txt', data, err => {
        //write error handling
        if (err) {
            console.error("Unable to write file: %s", err);
            return;
        }
        console.log(data); // display copied data
    });
});
