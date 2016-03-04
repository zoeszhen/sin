var http = require("http");
var url = require("url");


http.createServer(function(request, response){
response.writeHead(200,{"Content-Type":"text/plain", "Access-Control-Allow-Origin":"*"});
    var params = url.parse(request.url,true).query;
    
    var paraA=params.data1;
    console.log("data1:"+paraA);
    if(paraA=="sin(x)")
      {
      var sin = [];
		  var final=0;
			    for (var i = -3.14; i < 3.14; i+=0.1) {
			    	final=(i-((i*i*i)/6)+((i*i*i*i*i)/120)-((i*i*i*i*i*i*i)/5040))
			        sin.push([i.toFixed(2), final.toFixed(2)]);
			       
			    }
	
    }
    console.log("sucees to push");
    console.log(sin)
    response.write(String(sin));
	
	response.end();
	
	console.log("send pic")

 	

  }).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');