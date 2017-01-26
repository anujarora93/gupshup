function MessageHandler(context, event) {
	if(event.message=='audio'){
		var audioObj = {
			"type":"audio",   
			"url":"https://a.clyp.it/v3rprye4.mp3"
		};
		context.sendResponse(JSON.stringify(audioObj));
	}
}