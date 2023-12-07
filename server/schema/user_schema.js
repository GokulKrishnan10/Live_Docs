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
    const result = await userModel.findOne(data);
    const verify = bcryt.hash(data.password, 15);
    if (verify === res.password) response.status(200).json({ data: result });
    response.status(400).send("Wrong credentials");
  } catch (error) {
    response.status(404).send("User Not Found");
  }
}
async function addUser(request, response) {
  const hashedPassword = bcrypt.hash(data.password, 15);
  const data = request.body;
  try {
    const res = await userModel.create({
      mail_id: data.mail,
      password: hashedPassword,
      salt: salt,
      phone_number: data.phonenumber,
    });
    if (res) response.status(200).send("User added successfully");
  } catch (error) {
    response.status(400).send("Error while adding user!!");
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
