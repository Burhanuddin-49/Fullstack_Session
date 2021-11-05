const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.json());

let products = [
  { name: "iPhone Case", price: "999" },
  { name: "iPhone Case", price: "1999" },
  { name: "iPhone Case", price: "1499" },
];

// --------------Middlewares--------------------
const validator = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) res.json({ error: "Validation failed" });
  else next();
};

// --------------PUBLIC Routes--------------------
// GET ROUTE
// Send all products
app.get("/products", (req, res) => {
  res.json({ products });
});

// -----------PRIVATE Routes-------------------

app.post("/products/add", validator,(req, res) => {
  const { name, price } = req.body;

  products.push({
    name,
    price,
  });
  res.send({ products });
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
