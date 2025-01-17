
var message = 'I am so happy to be part of the Node Girls workshop!';
var fs = require('fs');
var http = require('http');

function handler (request, response) {
    var endpoint = request.url;
    console.log(endpoint);
    var method = request.method;
    console.log(method);
  
    if (method == 'GET') {
  
    if (endpoint === "/") {
      console.log("a");

      fs.readFile(__dirname + '/../public/index.html', function(error, file) {
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
    console.log("b");

    fs.readFile(__dirname + '/../public/main.css', function(error, file) {
      if (error) {
        response.writeHead(500, { "Content-type": "text/css" });
        console.log(error);
        return;
      }
      response.writeHead(202, {"Content-type": "text/css"});
  
      response.end(file);
    });
      //...
    } else if (endpoint === '/img/logo1.png') {
    fs.readFile(__dirname + '/../public/img/logo1.png', function(error, file) {
      if (error) {
        response.writeHead(500, { "Content-type": "image/png" });
        console.log(error);
        return;
      }
      response.writeHead(202, {"Content-type": "image/png"});
  
      response.end(file);
    });
  
  } else if(endpoint === '/favicon.ico') {
      fs.readFile(__dirname + '/../public/favicon.ico', function(error, file) {
          if (error) {
            response.writeHead(500, { "Content-type": "text/html" });
            console.log(error);
            return;
          }
          response.writeHead(202, {"Content-type": "text/html"});
  
          response.end(file);
        });
      
  
  }else if(endpoint === '/script.js'){ 
    fs.readFile(__dirname + '/../public/script.js', function(error, file) {
      if (error) {
        response.writeHead(500, { "Content-type": "text/javascript" });
        console.log(error);
        return;
      }
      response.writeHead(202, {"Content-type": "text/javascript"});

      response.end(file);
    });
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
    module.exports=handler; 