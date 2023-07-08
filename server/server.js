const express = require("express");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT;
const [addUser, updateUser, deleteUser] = require("./schema/user_schema");

app.get("/", (req, res) => {
  res.send("<h1>Hello, Docs server</h1>");
});
app.listen(PORT || 2000, () => console.log(`Server Running on Port ${PORT}`));
