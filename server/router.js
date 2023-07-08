const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
router.use(authenticate);
router.get("/", (req, res) => {});
function authenticate() {}
module.exports = router;
