/*  
compact
tall
full*/
else if(event.message=='web_view'){
	var quickreply = {
	    "type": "catalogue",
        "msgid": "6rty",
        "items": [{
            "title": "Gray T Shirt",
            "imgurl": "http://ecx.images-amazon.com/images/I/819Cirp6kPL._UL1500_.jpg",
            "options": [{
                "type": "url",
                "title": "view more",
                "url": "http://www.amazon.in/Gritstones-Hooded-T-Shirt-GS60210CWLGMEL-_Grey_Large/dp/B00OXR17OE/ref=sr_1_6",
                "webview_height_ratio": "compact"
            }]
        }]
	};
	context.sendResponse(JSON.stringify(quickreply));
	return;
}