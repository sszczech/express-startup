//Configuration
var settings = Object.create(null);
Object.defineProperties(settings, {
	LOCAL : {
		value	: (process.env.PORT === undefined) ? true : false,
		enumerable	: true,
		writable	: false,
		configurable	: false
	},

	database : {
		value : {
			HOST		: 'localhost',
			// PORT		: 3307,
			NAME 		: 'quizup',
			DATABASE	: 'quizup',
			USER		: 'root',
			USERNAME	: 'root',
			PASSWORD	: 'root'
		},
		enumerable	: true,
		writable	: true,
		configurable	: true
	},

	config : {
		value : {
			HOST : '127.0.0.1',
			PORT : 8080,
			MAX_CLUSTERS	: 1 // processor cores to use
		},
		enumerable	: true,
		writable	: true,
		configurable	: false
	}


});


// cloud database
if(!settings.LOCAL) {



	settings.database = {
		HOST		: '',
		PORT		: 3306,
		NAME 		: '',
		DATABASE	: '',
		USER		: '',
		USERNAME	: '',
		PASSWORD	: ''
	}

}

Object.seal(settings.database);

module.exports = settings;