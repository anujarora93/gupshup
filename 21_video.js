function MessageHandler(context, event) {
	if(event.message=='video'){
		var videoObj = {
			"type":"video",    
			"url":"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
		};
	context.sendResponse(JSON.stringify(videoObj));
	}
}    