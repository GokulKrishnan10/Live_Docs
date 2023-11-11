const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
// const MiddlewareClass = require("./middlewares/Middleware");

// router.use(MiddlewareClass.verifyToken);
router.get("/", (request, response) =>
  response.send(`<h1>Live Docs server</h1>`)
);
router.get("/edit", (request, response) => {});
module.exports = router;
