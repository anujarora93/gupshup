/*The Share Button only works with the Generic Template.
Only individual message bubbles can be shared.
share, URL (without Messenger Extensions) and Phone number buttons will behave normally other buttons will start a new conversation with the bot.*/
else if(event.message=='share'){
	var quickreply = {
	    "type": "catalogue",
        "msgid": "6rty",
        "items": [{
            "title": "Gray T Shirt",
            "imgurl": "http://petersapparel.parseapp.com/img/item101-thumb.png",
            "options": [{
                "type": "element_share"
            }]
        }]
	};
	context.sendResponse(JSON.stringify(quickreply));
	return;
}