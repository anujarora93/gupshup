//delete data vars context.simpledb.roomleveldata.usual =""; 
function MessageHandler(context, event) {
    var menu = "\n1.Combo#1\n2.Combo#2\n3.Combo#3";
    if(event.message.toLowerCase() == "menu"){
        context.sendResponse("selecciona algo: " + menu);    
    }else if(event.message == "1"){
        context.sendResponse("Quieres guardar este combo? s/n");
    }else if(event.message == "s"){
        context.simpledb.roomleveldata.pedido = "combo#1"
        context.sendResponse("Se a guardado esta preferencia");
    }else if(event.message.toLowerCase() == "n"){
        context.sendResponse("Ok no hay problema, puedes elegir otro \n"+menu);
    }else if(event.message.toLowerCase() == "pedido"){
        context.sendResponse(context.simpledb.roomleveldata.pedido);
    }else {
        context.sendResponse('Como no entendi? : '+event.message); 
    }
}