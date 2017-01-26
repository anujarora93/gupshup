function MessageHandler(context, event) {
    if(event.message.toLowerCase() == "config"){ 
        //accedemos a la variable de configuracion para esto debe de estar dada de alta
        var URL = context.simpledb.botleveldata.config.URL;    
        context.sendResponse("The var config is: " + URL );
    }
    
/** Functions declared below are required **/
function EventHandler(context, event) {
}

function HttpResponseHandler(context, event) {

}

function DbGetHandler(context, event) {
    
}

function DbPutHandler(context, event) {
    
}