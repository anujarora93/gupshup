function MessageHandler(context, event) {
    if(event.message.toLowerCase() == "imagen") {
        var image = {"type":"image",
                    "originalUrl":"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg",
                    "previewUrl":""};
        context.sendResponse(JSON.stringify(image));
    }
}    
   