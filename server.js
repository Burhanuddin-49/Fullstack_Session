const express = require("express");
const database = require('./database/db')
const PORT = 3000;
const app = express();
const categoryRoutes = require('./routes/categoryRoutes')

console.log(categoryRoutes.stack)

app.use('/categories', categoryRoutes)

app.use(express.json());

app.get('/',(req,res)=>{
  try {
    console.log(document)
  } catch (error) {
    res.status(200).send(error.message)
  }
  
})

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});

