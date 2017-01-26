/*
Facebook imposes certain limitations for Button templates :
           Text : 320 characters and must be UTF-8.
           Call-to-action title : 20 characters.
           Call-to-action items : 3 buttons.*/
else if (event.message.toLowerCase() == "poll"){
var payload = {
	"type": "poll",
	"question": "Te gusta el helado?",
	"msgid": "poll_helado"
};
context.sendResponse(JSON.stringify(payload));
return;        
}
else if (event.message.toLowerCase() == "yes" && event.messageobj.refmsgid=='poll_helado'){
	context.sendResponse("Genial, a mi tambien");
return;
}
else if (event.message.toLowerCase() == "no" && event.messageobj.refmsgid=='poll_helado'){
	context.sendResponse("No?, mmm pues ya");
return;
}