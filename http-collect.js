var http = require('http');
var bl = require('bl');
var url = process.argv[2];
http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
        var str = data.toString();
        var length = str.length;
        console.log(length);
        console.log(str);
    }));
});


// Official solution:
// var http = require('http')
//   var bl = require('bl')
  
//   http.get(process.argv[2], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }
//       data = data.toString()
//       console.log(data.length)
//       console.log(data)
//     }))
//   })


// Using concat- stream:
// var concatStream = require('concat-stream');
// var http = require('http');

// var url = process.argv[2];

// http.get(url, function (response) {
//   response.setEncoding('utf8');
//   response.pipe(concatStream(function (data) {
//     console.log(data.length);
//     console.log(data);
//   }));
// });

