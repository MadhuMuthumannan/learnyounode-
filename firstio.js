var fs = require('fs') 
var buf = fs.readFileSync(process.argv[2])
var str = buf.toString().split('\n').length - 1;
console.log(str)


// official solution:
// var fs = require('fs')
    
//     var contents = fs.readFileSync(process.argv[2])
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)