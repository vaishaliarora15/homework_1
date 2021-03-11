let fs = require('fs');
let input = process.argv.slice(2);
// let printfileobj = require
let operation = input[0];

//range of inputs
let last = input.length;
let initial = 1;
// check for wcat begins here
function bprintfile() {


    let linenum = 1;
    while (initial < last) {
        if (isfile(input[initial]) == true) {
            let data = fs.readFileSync(input[initial], 'utf8');
            let starr = data.split("\n");
            for (let j = 0; j < starr.length; j++) {
                if (starr[j].length > 1) {
                    console.log(linenum++, starr[j]);
                }
            }
            initial++;


        }
    }
}

function nprintfile() {
    let linenum = 1;
    while (initial < last) {
        if (isfile(input[initial]) == true) {
            let data = fs.readFileSync(input[initial], 'utf8');
            let starr = data.split("\n");
            for (let j = 0; j < starr.length; j++) {

                console.log(linenum++, starr[j]);

            }
            initial++;


        }
    }

}

function sprintfile() {
    while (initial < last) {
        if (isfile(input[initial]) == true) {
            let data = fs.readFileSync(input[initial], 'utf8');
            let starr = data.split("\n");
            for (let j = 0; j < starr.length; j++) {
                if (starr[j].length > 1) {
                    console.log(starr[j]);
                }
            }
            initial++;


        }
    }
}

if (input[0] == "wcat") {
    if (input[1] == "-s") {
        console.log("remove extra line breaks");
        initial++;
        sprintfile();

    } else if (input[1] == "-b") {
        console.log("print numbering of lines");
        initial++;
        bprintfile();
    } else if (input[1] == "-n") {
        console.log("print numbering of lines");
        initial++;
        nprintfile();
    } else {
        console.log("simple wcat function");
        while (initial < last) {
            printfile(input[initial]);
            initial++;
        }

    }
} else {
    console.log("no work assigned for this function");
}

if (input[1] == "-s") {
    initial++;
}



function printfile(filename) {
    if (isfile(filename) == true) {
        let data = fs.readFileSync(filename, 'utf8');
        console.log(data);
    }
    console.log("function end");
}

function isfile(dirpath) {
    return fs.lstatSync(dirpath).isFile();
}