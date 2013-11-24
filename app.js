//Configuration
var config = {
	host    : '127.0.0.1',
	port    : 8888,
}


/* * * * * * * * * * * * * * * * * * * * * * * *
 *                                             *
 *                  INIT                       *
 *                                             *
 * * * * * * * * * * * * * * * * * * * * * * * */
var express = require('express')
	, app = express()
	, server = require('http').createServer(app)
	, io = require('socket.io').listen(server);

	app.configure(function(){
		app.set('view engine', 'html');
		app.set('views', __dirname + '/views');
		app.use(express.logger('dev'));
		app.use(express.cookieParser());
		app.use(express.methodOverride());
		app.use(express.static(__dirname + '/assets'));
		app.use(require('express-blocks'));
		app.use(express.bodyParser());
	});


/* * * * * * * * * * * * * * * * * * * * * * * *
 *                                             *
 *                  APPLICATION                *
 *                                             *
 * * * * * * * * * * * * * * * * * * * * * * * */
app.use(express.static(__dirname + '/assets'));
server.listen(config.port, config.host);

console.log('Application running: http://' + config.host + ':' + config.port);



/* * * * * * * * * * * * * * * * * * * * * * * *
 *                                             *
 *                  ROUTING                    *
 *                                             *
 * * * * * * * * * * * * * * * * * * * * * * * */
app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});



/* * * * * * * * * * * * * * * * * * * * * * * *
 *                                             *
 *                  SOCKETS                    *
 *                                             *
 * * * * * * * * * * * * * * * * * * * * * * * */
 io.sockets.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
});