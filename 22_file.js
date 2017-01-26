function MessageHandler(context, event) {
	if(event.message=='file'){
		var fileObj = {
			"type":"file", 
			"url":"http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf"
		};
		context.sendResponse(JSON.stringify(fileObj));
	}
}    