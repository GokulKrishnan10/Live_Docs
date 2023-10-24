const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
import MiddlewareClass from "./middlewares/Middleware";
router.use(MiddlewareClass.verifyToken);
router.get("/edit", (request, response) => {});
module.exports = router;
