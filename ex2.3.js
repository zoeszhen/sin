var http = require("http");
var url = require("url");


http.createServer(function(request, response){
response.writeHead(200,{"Content-Type":"text/plain", "Access-Control-Allow-Origin":"*"});
    var params = url.parse(request.url,true).query;
    
    var i=params.i;
    console.log("data1:"+i);
   
	final=(i-((i*i*i)/6)+((i*i*i*i*i)/120)-((i*i*i*i*i*i*i)/5040))
			        
    console.log("sucees to push");
    console.log(final)
   
    response.write(String(final));
	
	response.end();
	
	console.log("send pic")

 	

  }).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');