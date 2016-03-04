var http = require("http");
var url = require("url");
var gnuplot = require('gnuplot');
var fs = require('fs');


http.createServer(function(request, response){

    var params = url.parse(request.url,true).query;
    
    var paraA=params.data1;
    console.log("data1:"+paraA);//get data type
    var paraB=params.data2;
	 console.log("data2:"+paraB);//get data rage
    console.log(params);
    fig=params.toString();
	
	gnuplot()// create the graphics
    .set('term jpeg')
    .set('title "Sin(x) Functions"')
    .set('xrange'+params.data2) 
    .set('yrange [-2:2]')
    .set('xtics 0.1')
   
    .set('zeroaxis')
    .plot(params.data1,{end: true})
    .pipe(fs.createWriteStream("out.jpeg"));
    
    console.log("creat pic");
     
	var img=fs.readFileSync("out.jpeg");
 	response.writeHead(200,{"Content-Type":"image/jpeg", "Access-Control-Allow-Origin":"*"});//push back 
	response.end(img,"binary");
	
	console.log("send pic")

 	

  }).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');