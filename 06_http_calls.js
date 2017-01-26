/*The header is passed as JSON object and flow of fields in this GET call:
1.    URL - weather API's URL ('http://weatherapi.com/json/weather.json?city=Mumbai)
2.    Headers - headers are passed as JSON objects ({“apikey”:“ca99833c8c16a68d94”})*/

Hence the complete syntax would be - context.simplehttp.makeGet(url, headers) .
function MessageHandler(context, event) {
	if(event.message== "fecha") {
		context.simplehttp.makeGet('http://testminister.com/json/date.json');
	}
}
function HttpResponseHandler(context, event) {
	var fechaJson = JSON.parse(event.getresp);
	var fecha = fechaJson.date;
	context.sendResponse("Hoy es : " + fecha);
}

//----other example

function MessageHandler(context, event) {
    if(event.message == "clima") {
        context.simplehttp.makeGet("http://api.openweathermap.org/data/2.5/weather?lat=19.513450&lon=-101.609155&appid=7097ebc2bab397c18376cc2172e5f9a1");
    }
}
function HttpResponseHandler(context, event) {
	var tiempo = JSON.parse(event.getresp);
	var descripcion = "";
	descripcion = tiempo.weather[0].description;
	context.sendResponse(descripcion);   
}
