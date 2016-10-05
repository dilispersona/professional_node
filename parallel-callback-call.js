var callbackcall = require('./operation');

callbackcall({some:'args'},function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("successfull",result);
    }
})