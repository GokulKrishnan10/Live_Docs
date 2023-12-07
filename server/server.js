const express = require("express");
const app = express();
const route = express();
require("dotenv").config();
const PORT = process.env.PORT;
const [
  addUser,
  updateUser,
  deleteUser,
  checkUser,
] = require("./schema/user_schema");
const router = require("./router");
const cors = require("cors");

//Middlewares
route.use("/api", app);
app.use("/user", router);
app.use(express.json());
app.use(cors({ origin: "*" }));
route.use(cors({ origin: "*" }));

//Routes
route.get("/", (req, res) => {
  res.send("<h1>Hello, Docs server</h1>");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, Docs server</h1>");
});

//User create API
app.post("/post-user", addUser);

//User check API
app.get("/checkuser", checkUser);

//Express running App
route.listen(PORT || 2000, () =>
  console.log(`Server Running on Port ${PORT || 2000}`)
);
