const path = require('path')

console.log(path.resolve('./app.js'))
console.log(path.relative("/",'./app.js'))
console.log(path.extname('./app.js'))
console.log(path.dirname('./temp/app.js'))

console.log(__dirname, 'app.js')