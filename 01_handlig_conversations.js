function MessageHandler(context, event) {
	if(event.message.toLowerCase() == "hola") { 
        context.sendResponse("Hola que tal, como estas?"); 
    } 
    else if (event.message.toLowerCase() == "bien") {
    	//nombre del usuario
        context.sendResponse("Que haces " + event.senderobj.display + " ?");
    } 
    else { 
        context.sendResponse('No entendi : '+event.message); 
	} 
} 