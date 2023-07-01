const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("<h1>Hello, Docs server");
});
app.listen(PORT || 2000, () => console.log(`Server Running on Port ${PORT}`));
