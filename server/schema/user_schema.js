const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URL, {
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
async function addUser(data) {
  try {
    const res = await userModel.create({
      mail_id: data.mail,
      password: data.password,
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

module.exports = [addUser, updateUser, deleteUser];
