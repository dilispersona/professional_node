var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'temp');
var target = path.join(dir, 'callback');

fs.mkdir(dir, handlingError(mkdirFtn));

function mkdirFtn() {
    fs.readFile(__filename, handlingError(haveFile));
}

function haveFile(content) {
    fs.writeFile(target, content, handlingError(wroteFile));
}

function wroteFile() {
    console.log("all done");
}

function handleError(err) {
    console.error(err);
}

function handlingError(cb) {
    return function (err, result) {
        if (err) {
            handleError(err);
        } else {
            cb(result);
        }
    }
}