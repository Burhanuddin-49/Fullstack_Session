const fs = require('fs')

// fs.readFile('./test.txt', (error,data)=>{
//     if(error) console.log(error)
//     else console.log(data.toString())
// })

// console.log(fs.readFileSync('./test.txt','utf8'))

fs.writeFile('./test.txt', "write text here",(error)=>{
    if(error) console.log(error)
})