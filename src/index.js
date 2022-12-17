const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const userController = require("./controllers/user.controller")

const port=process.env.PORT||5000
require("dotenv").config();
const {register,login, generateToken} = require("./controllers/auth.controller")
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userController)

app.post("/register", register)
app.post("/login", login)


app.listen(port, async () => {
    try{
        await connect();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message);
    }
});