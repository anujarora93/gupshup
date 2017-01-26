if(event.message=='receipt_template'){
  var list ={
   "type": "receipt",
   "recipient_name": "John",
   "merchant_name": "ShopingKart",
   "order_number": "342121213",
   "currency": "USD",
   "payment_method": "Visa 8448",
   "timestamp": "1428444852",
   "order_url": "http://petersapparel.parseapp.com/order?order_id=123456",
   "elements": [
      {
         "title": "Grey T-Shirt",
         "subtitle": "100% cotton",
         "quantity": 2,
         "price": 50,
         "currency": "USD",
         "image_url": "http://site.topdogshirts.com/images/blank/t473silver.jpg"
      },
      {
         "title": "Black T-Shirt",
         "subtitle": "100% cotton",
         "quantity": 1,
         "price": 25,
         "currency": "USD",
         "image_url": "http://site.topdogshirts.com/images/blank/t473black.jpg"
      }
   ],
   "address": {
      "street_1": "645, Low park",
      "street_2": "",
      "city": "Belmont",
      "postal_code": "94230",
      "state": "CA",
      "country": "US"
   },
   "summary": {
      "subtotal": 75,
      "shipping_cost": 4.95,
      "total_tax": 6.19,
      "total_cost": 56.14
   },
   "adjustments": [
      {
         "name": "New Customer Discount",
         "amount": 20
      },
      {
         "name": "$10 Off Coupon",
         "amount": 10
      }
   ]
};

    context.sendResponse(JSON.stringify(list));
    return;
}