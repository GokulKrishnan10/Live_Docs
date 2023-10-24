const jwt = require("jsonwebtoken");
const fs = require("fs");
export default class MiddlewareClass {
  static createToken(request, response) {
    const key = fs.readFileSync("D:Live_docslive_docskeys/key");
    const token = jwt.sign({ data }, key, {
      expiresIn: "604800s",
    });
    return token;
  }
  static verifyToken(request, response) {
    const key = fs.readFileSync("D:Live_docslive_docskeys/key.pub");
    const verification = jwt.verify(token, key);
    return verification;
  }
}
