var http = require('http');

var message = 'I am so happy to be part of the Node Girls workshop!';
var fs = require('fs');

function handler (request, response) {
  var endpoint = request.url;
  console.log(endpoint);
  var method = request.method;
  console.log(method);

  if (method == 'GET') {

  if (endpoint === "/") {

    fs.readFile(__dirname + '/public/index.html', function(error, file) {
      if (error) {
        response.writeHead(500, { "Content-type": "text/html" });

        console.log(error);
        return;
      }
      response.writeHead(200, {"Content-Type": "text/html"});

      response.end(file);
    });

  }
 else if (endpoint === '/main.css') {
  console.log("node");

  fs.readFile(__dirname + '/public/main.css', function(error, file) {
    if (error) {
      response.writeHead(500, { "Content-type": "text/html" });
      console.log(error);
      return;
    }
    response.writeHead(202, {"Content-type": "text/html"});

    response.end(file);
  });
    //...
  } else if (endpoint === '/img/image.jpg') {
  fs.readFile(__dirname + '/public/img/image.jpg', function(error, file) {
    if (error) {
      response.writeHead(500, { "Content-type": "text/html" });
      console.log(error);
      return;
    }
    response.writeHead(202, {"Content-type": "text/html"});

    response.end(file);
  });

} else if(endpoint === '/favicon.ico') {
    fs.readFile(__dirname + '/public/favicon.ico', function(error, file) {
        if (error) {
          response.writeHead(500, { "Content-type": "text/html" });
          console.log(error);
          return;
        }
        response.writeHead(202, {"Content-type": "text/html"});

        response.end(file);
      });
    

}else if(endpoint === '/text/html'){ 
  console.log("hello world!");


}else{}
  }
  if (method == 'POST') {
var querystring = require('querystring');
var allTheData = '';

request.on('data', function (chunkOfData) {

    allTheData += chunkOfData;
});
  request.on('end', function () {
    response.writeHead(302, {"Location": "text/html"});

    var convertedData = querystring.parse(allTheData);
    console.log(convertedData);
    response.end();

  });


  }
  }

var server = http.createServer(handler);

server.listen(3000, function () {

    console.log("Server is listening on port 3000. Ready to accept requests!");
});

