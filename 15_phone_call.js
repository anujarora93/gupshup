function MessageHandler(context, event) {
    if(event.message=='phone_call'){
    	var quickreply = {
    	   "type": "catalogue",
            "msgid": "6rty",
            "items": [{
                "title": "Gray T Shirt",
                "imgurl": "http://ecx.images-amazon.com/images/I/819Cirp6kPL._UL1500_.jpg",
                "options": [{
                "type": "phone_number",
                "title": "Call for more information",
                "phone_number": "+524341001957"
                }]
            }]
    	};
    	context.sendResponse(JSON.stringify(quickreply));
    	return;
    }
}