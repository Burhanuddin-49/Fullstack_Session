let greet = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Welcome");
  }, 3000);
});

greet.then(value=>{
  console.log(value)
  return 'welcom Agian'
}).then(newValue=>{
  console.log(newValue)
})