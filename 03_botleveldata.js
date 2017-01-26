function MessageHandler(context, event) {
    if(event.message.toLowerCase() == "hola"){
        if(isNewUser(context)){
            var totalcount = context.simpledb.botleveldata.usagecount;
            if(!totalcount){
                context.simpledb.botleveldata.usagecount = 1;
               
            }else {
                totalcount = parseInt(context.simpledb.botleveldata.usagecount)+1;
                context.simpledb.botleveldata.usagecount = totalcount;
           }
            context.sendResponse("bienvenido eres el usuario numero: "+ totalcount);       
        }else{
            context.sendResponse("Bievenido de nuevo ya estas registrado");    
        }
    }
}
function isNewUser(context){
    var newuser = context.simpledb.roomleveldata.isnewuser;
    if(!newuser){
        context.simpledb.roomleveldata.isnewuser = true;
        return true;
    }else{
        return false;
    }
    
}