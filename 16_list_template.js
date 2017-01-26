
 if(event.message=='list_template'){
  var list ={
   "type": "list",
   "topElementStyle": "compact",
   "msgid": "list123",
   "items": [
      {
         "title": "Collection of T-shirt",
         "subtitle": "100% Cotton T-shirts",
         "imgurl": "https://pbs.twimg.com/media/CO2l-3oUYAAMV5S.jpg",
         "defaultAction": {
            "type": "url",
            "title": "view details",
            "webview_height_ratio": "tall",
            "url": "https://www.gupshup.io"
         },
         "options": [
            {
               "title": "View",
               "type": "url",
               "url": "https://www.gupshup.io",
               "webview_height_ratio": "tall"
            }
         ]
      },
      {
         "title": "Grey T-shirt",
         "subtitle": "100% Cotton",
         "imgurl": "http://site.topdogshirts.com/images/blank/t473silver.jpg",
         "defaultAction": {
            "type": "url",
            "title": "view details",
            "webview_height_ratio": "tall",
            "url": "https://www.gupshup.io"
         },
         "options": [
            {
               "title": "Buy",
               "type": "text"
            }
         ]
      },
      {
         "title": "Black T-shirt",
         "subtitle": "100% Cotton",
         "imgurl": "http://site.topdogshirts.com/images/blank/t473black.jpg",
         "defaultAction": {
            "type": "url",
            "title": "view details",
            "webview_height_ratio": "tall",
            "url": "https://www.gupshup.io"
         },
         "options": [
            {
               "title": "Buy",
               "type": "text"
            }
         ]
      },
      {
         "title": "Blue T-shirt",
         "subtitle": "100% Cotton",
         "imgurl": "http://site.topdogshirts.com/images/blank/t473trueroyal.jpg",
         "defaultAction": {
            "type": "url",
            "title": "view details",
            "webview_height_ratio": "tall",
            "url": "https://www.gupshup.io"
         },
         "options": [
            {
               "title": "Buy",
               "type": "text"
            }
         ]
      }
   ],
   "globalButtons": [
      {
         "type": "text",
         "title": "View More"
      }
   ]
};

    context.sendResponse(JSON.stringify(list));
    return;
}
if(event.messageobj.text=='Buy 2' && event.messageobj.refmsgid=='list123'){
    context.sendResponse("Your white t-shirt will be shipped to you.");
    return;
 }