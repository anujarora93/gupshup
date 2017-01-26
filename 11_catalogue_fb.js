/*
Facebook imposes certain limitations for Generic template -
		   Title: 80 characters.
		   Subtitle: 80 characters.
		   Call-to-action title: 20 characters.
		   Call-to-action items: 3 buttons.
		   Bubbles per message (horizontal scroll): 10 elements.
		   Image Dimensions: Image ratio should be 1.91:1.
*/
else if (event.message.toLowerCase() == "catalogue"){
	var payload = {
		"type": "catalogue",
		"msgid": "catalogue_camisas",
		"items": [
			{
				"title": "Camisa blanca",
				"subtitle": "Algodon \nXs, S, M, L \n$10",
				"imgurl": "http://petersapparel.parseapp.com/img/item100-thumb.png",
				"options": [
					{
						"type": "url",
						"title": "Detalles",
						"url": "http://petersapparel.parseapp.com/img/item100-thumb.png"
					}, 
					{
						"type": "text",
						"title": "Comprar"
					}
				]	
			}, 
			{
				"title": "Camisa gris",
				"subtitle": "Algodon \nXs, S, M, L \n$12",
				"imgurl": "http://petersapparel.parseapp.com/img/item101-thumb.png",
				"options": [
					{
						"type": "url",
						"title": "Detalles",
						"url": "http://petersapparel.parseapp.com/img/item101-thumb.png"
					}, 
					{
						"type": "text",
						"title": "Comprar"
					}
				]
			}
		]
	};
	context.sendResponse(JSON.stringify(payload));
	 return;        
   }
else if(event.message=='Comprar 1' && event.messageobj.refmsgid=='catalogue_camisas'){
	context.sendResponse("Tu camisa blanca estara lista en un dia");
	return;
}
else if(event.message=='Comprar 2' && event.messageobj.refmsgid=='catalogue_camisas'){
	context.sendResponse("Tu camisa gris estara lista en un dia");
	return;
}