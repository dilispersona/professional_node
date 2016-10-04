var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'temp');
var target = path.join(dir,'target');

fs.mkdir(dir, function (err) {
    if (err) {
        handleError();
    } else {
        fs.readFile(__filename, function(err,content){
            if (err){
                handleError(err);
            }else {
                fs.writeFile(target,content,function(err){
                    if(err){
                        handleError(err);
                    }else{
                        console.log("all done");
                    }
                })
            }
        })
    }
})

function handleError(err) {
    console.error(err)
}