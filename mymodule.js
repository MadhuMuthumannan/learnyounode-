var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, extension, cb) {
  var filteredFiles = [];  

  fs.readdir(dirPath, function (err, list) {
    if (err) {
      return cb(err);
    }

    list.forEach(function (file) {
      if (path.extname(file) === '.' + extension) {
        filteredFiles.push(file);
      }
    });

    cb(null, filteredFiles);
  });
};

// Official solution:
//  var fs = require('fs')
//     var path = require('path')
    
//     module.exports = function (dir, filterStr, callback) {
//       fs.readdir(dir, function (err, list) {
//         if (err) {
//           return callback(err)
//         }
    
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
    
//         callback(null, list)
//       })
//     }


