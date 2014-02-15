/* * * * * * * * * * * * * * * * * * * * * * * *
 *                                             *
 *                  INIT                       *
 *                                             *
 * * * * * * * * * * * * * * * * * * * * * * * */
var express		= require('express')
	, page		= require('./routes/page')
	, settings	= require('./settings')
	, app		= express()
	, server	= require('http').createServer(app)
	, io		= require('socket.io').listen(server);

	app.configure(function(){
		app.set('view engine', 'html');
		app.set('views', __dirname + '/views');
		app.use(express.logger('dev'));
		app.use(express.cookieParser());
		app.use(express.methodOverride());
		app.use(express.static(__dirname + '/assets'));
		app.use(require('express-blocks'));
		app.use(express.bodyParser());

		// defaults
		app.locals({
			title	: 'Express Startup'
		});
	});


/* * * * * * * * * * * * * * * * * * * * * * * *
 *                                             *
 *                  APPLICATION                *
 *                                             *
 * * * * * * * * * * * * * * * * * * * * * * * */
app.use(express.static(__dirname + '/assets'));
server.listen(settings.config.PORT, settings.config.HOST);

console.log('Application running: http://' + settings.config.HOST + ':' + settings.config.PORT);



/* * * * * * * * * * * * * * * * * * * * * * * *
 *                                             *
 *                  ROUTING                    *
 *                                             *
 * * * * * * * * * * * * * * * * * * * * * * * */
app.get('/', page.main);



/* * * * * * * * * * * * * * * * * * * * * * * *
 *                                             *
 *                  SOCKETS                    *
 *                                             *
 * * * * * * * * * * * * * * * * * * * * * * * */
 io.sockets.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
});