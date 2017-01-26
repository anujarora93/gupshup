function MessageHandler(context, event) {
	if(event.messageobj.type=='location'){
        var lat = event.messageobj.latitude;
        var lang = event.messageobj.longitude;
        var url = event.message;
        context.sendResponse("Latitud es:"+lat+"\n Longitud: "+lang+"\n Mapa: "+url);
    }
}    