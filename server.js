// const http = require("http");
// const fs = require("fs");
// const path = require("path");

const { request } = require("express");

// const server = http.createServer((request, response) => {
//   // console.log(request.url)
//   // console.log(request.headers)
//   // console.log(request.method)
//   // const makeup = fs.readFileSync(path.resolve('index.html'))
//   const { url } = request;
//   if (url == "/login") {
//     response.write("<h1>LOGIN</h1>");
//     response.end();
//   }
//   if (url == "/signup") {
//     response.write("<h1>SIGNUP</h1>");
//     response.end();
//   }
// });

// server.listen(3000, () => {
//   console.log(`server listening at PORT: ${3000}`);
// });

const data = [{name: 'bb'},{name: 'bob'}]

const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log(req)
    res.send('This is response')
})

app.get('/login',(req,res)=>{
    res.send('This is LOGIN')
})

app.get('/getName',(req,res)=>{
    res.send(data)
})

app.listen(3000,()=>{
    console.log("server listening at port 3000")
})