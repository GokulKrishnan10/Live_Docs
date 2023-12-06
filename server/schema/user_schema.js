const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();
mongoose.connect("mongodb://localhost:27017", {
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
    required: true,
  },
  full_name: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
});
const userModel = mongoose.model("User", UserSchema);
async function deleteUser(request, response) {
  try {
    const res = await userModel.deleteOne(data);
    return res;
  } catch (error) {
    return error;
  }
}
async function checkUser(request, response) {
  try {
    const res = await userModel.findOne(data);
    const verify = bcryt.hash(data.password, 15);
    if (verify === res.password) return res;
    return new Error();
  } catch (error) {
    return error;
  }
}
async function addUser(data) {
  const hashedPassword = bcrypt.hash(data.password, 15);
  try {
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
async function updateUser(request, response) {
  try {
    const res = await userModel.findOneAndUpdate(data, updatedData);
    return res;
  } catch (error) {
    return error;
  }
}

module.exports = [addUser, updateUser, deleteUser, checkUser, DB];
