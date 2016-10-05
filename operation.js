module.exports = function composeCall(args,cb){
   
   var pending = 0; 
   var results = [];
   var calledback = false;

   call1(args,handleResult());
    call2(args,handleResult());
    call3(args,handleResult());
    
    function handleResult(){
        var order = pending;
        pending ++;
        return function(err,result){
            pending --;
            if(err){
                callback(err);
            }else{
                results[order] = result;
                if(! pending){                    
                    callback(null,results)
                } 
            }
        }
    }
    function callback(err,value){
       if(!calledback){
           calledback = true;
           cb(err,value);
       }
    }

}

function call1(args,cb){
    setTimeout(cb, randomTime(), null , 1);
}
function call2(args,cb){
    setTimeout(cb, randomTime(), null , 2);
}
function call3(args,cb){
    setTimeout(cb, randomTime(), null , 3);
}

function randomTime(){
    return Math.floor(Math.random() * 1e10);
}
function randomValue(){
    return Math.floor(Math.random() * 1e10);
}