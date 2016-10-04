var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'temp');
var target = path.join(dir, 'callback');

fs.mkdir(dir, mkdirFtn);

function mkdirFtn(err) {
    if (err) {
        handleError();
    } else {
        fs.readFile(__filename, haveFile);
    }
}

function haveFile(err, content) {
    if (err) {
        handleError(err);
    } else {
        fs.writeFile(target, content, wroteFile);
    }
}

function wroteFile(err) {
    if (err) {
        handleError(err);
    } else {
        console.log("all done");
    }
}


function handleError(err) {
    console.error(err)
}