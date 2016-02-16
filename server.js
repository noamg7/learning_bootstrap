var express = require('express'),
    logger  = require('morgan')('dev'),
    server  = express();
//middleware
server.use(express.static(__dirname+'/public'));
server.use(logger);
//routes
server.get('/', home);
//start the application
server.listen(8080, listenCallback);
//named functions
function home(req, res){
  res.sendFile('public/html/index.html', {root: __dirname});
}
function listenCallback(){
  console.log('Now listening on port 8080');
}
