const mongoose = require("mongoose");
const pbkdf2 = require("pbkdf2");
// const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "mongo",
//   port: 27017,
//   user: "root",
//   password: "password",
//   database: "document_database",
// });
// connection.connect(function (error) {
//   if (error) throw new Error(error);
//   console.log("Connection succeeded");
// });
require("dotenv").config();
mongoose.connect("mongodb://mongo_container:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const DB = mongoose.connection;
DB.on("error", () => {
  console.error.bind("No Internet");
});
DB.once("open", () => {
  console.log("Established connected with MongoDB");
});

const UserSchema = new mongoose.Schema({
  mail_id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    unique: true,
  },
});
const userModel = mongoose.model("User", UserSchema);
async function deleteUser(data) {
  try {
    const res = await userModel.deleteOne(data);
    return res;
  } catch (error) {
    return error;
  }
}
async function checkUser(data) {
  try {
    const res = await userModel.findOne(data);
    if (pbkdf2(data.password, res.salt, 500) === res.password) return res;
    return new Error();
  } catch (error) {
    return error;
  }
}
async function addUser(data) {
  try {
    const salt = crypto.randomBytes(128).toString("base64");
    const iterations = 500;
    const hashedPassword = pbkdf2(data.password, salt, iterations);
    const res = await userModel.create({
      mail_id: data.mail,
      password: hashedPassword,
      salt: salt,
      phone_number: data.phonenumber,
    });
    return res;
  } catch (error) {
    return error;
  }
}
async function updateUser(data, updatedData) {
  try {
    const res = await userModel.findOneAndUpdate(data, updatedData);
    return res;
  } catch (error) {
    return error;
  }
}

module.exports = [addUser, updateUser, deleteUser, checkUser];
