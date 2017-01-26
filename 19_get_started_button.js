function EventHandler(context, event) {
	if(event.messageobj.text=='startchattingevent'&& event.messageobj.type=='event'){
		var button = {
		              "type": "survey",
		              "question": "What would you like to do?",
		              "options": ["Eat", "Drink", "Both"],
		              "msgid": "gt_212"
		             }   
		context.sendResponse(JSON.stringify(button));
	}
}