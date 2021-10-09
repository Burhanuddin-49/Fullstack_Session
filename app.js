let value =new Promise((resolve,reject)=>{
  setTimeout(()=> {
    resolve('Hello')
  },1000)
})

console.log(value)

setTimeout(()=>{
  console.log(value)
},2000)