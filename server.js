const http = require('http')
console.log(http)

const server = http.createServer((request,response) =>{
    
    // console.log(request.url)
    // console.log(request.headers)
    // console.log(request.method)
    const path = request.url
    response.write(`You made a request ${path}`)
    response.end()
})

server.listen(3000,()=>{
    console.log(`server listening at PORT: ${3000}`)
})