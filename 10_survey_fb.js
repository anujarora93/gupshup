else if (event.message.toLowerCase() == "survey"){
	var payload = {
		"type": "survey",
		"question": "Que te ofresco?",
		"msgid": "survey_comida",
		"options": [
			"Comidas",
			"Bebidas",
			{
			  "type": "url",
			  "title": "View website",
			  "url": "www.gupshup.io"
			}
		]   
	};
	context.sendResponse(JSON.stringify(payload));
	return;        
}
else if (event.message.toLowerCase() == "comidas" && event.messageobj.refmsgid=='survey_comida'){
	context.sendResponse("Seleccionaste comidas");
	return;
}
else if (event.message.toLowerCase() == "bebidas" && event.messageobj.refmsgid=='survey_comida'){
	context.sendResponse("Seleccionaste bebidas");
	return;
}