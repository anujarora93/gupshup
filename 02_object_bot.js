if(event.message == "sender"){
    //regresa el id del usuario del canal de converacion
    context.sendResponse("el id de tu user es: " + event.sender);
}
else if(event.message == "channel"){
    context.sendResponse("El canal de nuestra conversacion es: "+ event.channel);
}
else if(event.message == "botname"){
    context.sendResponse("Mi nombre es: "+ event.botname);
}
else if(event.message == "display"){
    context.sendResponse("Tu nombre es: "+ event.senderobj.display);
}
else if(event.message == "text"){
    //regresa el mensaje que mando el usuaur
    context.sendResponse("Tu mensaje fue: "+ event.messageobj.text);
}
else if(event.message == "type"){
    //regresa el tipo de mensaje que mando el usuario
    context.sendResponse("El tipo de tu mensaje es: "+ event.messageobj.type);
}
else { 
    context.sendResponse('No entendi : '+event.message); 
} 