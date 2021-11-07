const express = require("express");
const database = require('./database/db')
const PORT = 3000;
const app = express();
app.use(express.json());



app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
