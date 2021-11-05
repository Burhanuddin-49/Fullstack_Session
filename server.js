const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.json());

const token = "TOP_SECRET";

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

const isAuthorised = (req, res, next) => {
  const { email, password } = req.body;
  if (req.headers.authorisation === token) next();
  else {
    res.json({ error: "UNAUTHORISED" });
  }
};

// --------------PUBLIC Routes--------------------
// GET ROUTE
// Send all products
app.get("/products", (req, res) => {
  res.json({ products });
});

// -----------PRIVATE Routes-------------------

app.post("/products/add", isAuthorised, validator, (req, res) => {
  const { name, price } = req.body;

  products.push({
    name,
    price,
  });
  res.send({ products });
});

// --------------Authenticaation-------------
app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@gmail.com" && password === "password") {
    res.send({ token });
  } else {
    res.send({ message: "UNAUTHORISED" });
  }
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
