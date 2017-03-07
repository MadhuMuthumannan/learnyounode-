var fs = require('fs');
var path =  require('path');
fs.readdir(process.argv[2], function (err, str){
  if(err){
	throw err;
		}
		for (var i = 0 ; i < str.length; i++) {
		if (path.extname(str[i]) == '.' + process.argv[3] ) {
			console.log(str[i]);
		}
		}
});




// Official solution:
// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//     if (err) return console.error(err)
//     files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//         console.log(file)
//     }
//     })
// })
