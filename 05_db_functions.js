/** This is a sample code for your bot**/
function MessageHandler(context, event) {
    if(event.message == 'guardar'){
        context.simpledb.doPut("registro1" ,"{\"nombre\":\"daniel\",\"tel\":\"4341001558\",\"email\":\"na.da.007@outlook.com\"}");
    }else if(event.message == "mostrar") {
        context.simpledb.doGet("registro1")
    }
}
/** Functions declared below are required **/
function EventHandler(context, event) {
}

function HttpResponseHandler(context, event) {
}

function DbGetHandler(context, event) {
    var registro = JSON.parse(event.dbval);
    var nombre = registro.nombre;
    var tel = registro.tel;
    var email = registro.email;
    
    context.sendResponse(nombre+" "+tel+" "+email);
}

function DbPutHandler(context, event) {
    context.sendResponse("Se guardo en la bd");
}