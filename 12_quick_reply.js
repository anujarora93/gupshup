/*
The number of buttons is limited to 10. 
Button title has a 20 character limit.
Image should be at least 24x24 and will be cropped and resized by FB.
*/
else if(event.message=='quick_reply'){
	var quickreply = {
		"type": "quick_reply",
		"content": {
			"type": "text",
			"text": "Elige una opcion"
			},
		"msgid": "quick_reply_1",
		"options": [
			"Direccion", {
				"type": "location"
			}, {
				"type": "text",
				"title": "Skip",
				"iconurl": "http://icons.iconarchive.com/icons/visualpharm/must-have/256/Next-icon.png"
			}
		]
	};
	context.sendResponse(JSON.stringify(quickreply));
	return;
}
else if(event.message=='Enter address'&& event.messageobj.refmsgid=='quick_reply_1'){
	context.sendResponse("Please enter the address");
	return;
}
//texto
else if(event.message=='quick_reply_text'){
	var quickreply = {
		"type": "quick_reply",
    	"content": {
        	"type": "text",
        	"text": "cual es tu color favorito?"
	    },
	    "msgid": "qr_text",
	    "options": [
	        "Rojo",
	        "Verde",
	        "Amarillo",
	        "Azul"
	    ]
	};
	context.sendResponse(JSON.stringify(quickreply));
	return;
}
else if(event.message=='Rojo'&& event.messageobj.refmsgid=='qr_text'){
	context.sendResponse("Tu seleccion es Rojo");
	return;
}
//imagen y textos
else if(event.message=='quick_reply_text_image'){
	var quickreply = {
	    "type": "quick_reply",
	    "content": {
	        "type": "text",
	        "text": "cual es tu color favorito?"
	         },
	    "msgid": "qr_text_image",
	    "options": [{
	            "type": "text",
	            "title": "Rojo",
	            "iconurl": "http://www.iconsplace.com/icons/preview/red/record-256.png"
	            },
	            {
	            "type": "text",
	            "title": "Verde",
	            "iconurl": "http://www.iconsplace.com/icons/preview/008342/record-256.png"
	            },
	            {
	            "type": "text",
	            "title": "Azul",
	            "iconurl": "http://www.iconsplace.com/icons/preview/blue/record-256.png"
	            }]
	};
	context.sendResponse(JSON.stringify(quickreply));
	return;
}
else if(event.message=='Rojo'&& event.messageobj.refmsgid=='qr_text_image'){
	context.sendResponse("Tu seleccion es Rojo");
	return;
}
//localizacion
else if(event.message=='quick_reply_location'){
	var quickreply = {
	     "type": "quick_reply",
	    "content": {
	        "type": "text",
	        "text": "Send your location"
	    },
	    "msgid": "qr_location",
	    "options": [{
	        "type": "location"
	        }]
	};
	context.sendResponse(JSON.stringify(quickreply));
	return;
}
else if(event.messageobj.type=='location' && event.messageobj.refmsgid=='qr_location'){
	context.sendResponse("Tu seleccion es location");
	return;
}