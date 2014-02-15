var page = Object.create(null);
Object.defineProperties(page, {
	main : {
		value : function (req, res, next) {
			res.render('index.ejs', {});
		},
		enumerable : true
	}
});

module.exports = page;