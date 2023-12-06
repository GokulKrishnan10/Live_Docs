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
app.use(express.json())
app.use(cors({origin:'*'}))
route.use(cors({ origin: "*" }));

route.get("/", (req, res) => {
  res.send("<h1>Hello, Docs server</h1>");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, Docs server</h1>");
});

app.post('/post-user',async(request,response)=>{
  console.log('Request is ',request.body)
  const addedUser= await addUser(request.body)
  if(addedUser)response.status(200).json({status:200,message:"User added successfully"})
  response.status(400).json({status:400,message:"User added successfully"})
})

//User create API
app.get("/adduser", addUser);
//User check API
app.get("/checkuser", checkUser);

route.listen(PORT || 2000, () => console.log(`Server Running on Port ${PORT || 2000}`));
