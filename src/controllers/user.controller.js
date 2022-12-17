const express = require("express");
const authenticate = require("../middlewares/authenticate");
const User = require('../models/user.model')
const authorise = require("../middlewares/authorise")
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (user) => {
        return jwt.sign({user}, `${process.env.SECRET_KEY}`)
}

router.get('/',authenticate , authorise(["Admin"]), async(req,res)=>{
    try{
        const user=await User.find({}).lean().exec();
        return res.status(200).send(user)
    }
catch(e){
    return res.status(400).send({message:e.message})
}
})

router.post("/",authenticate, authorise(["Admin"]),async(req,res)=>{
    try{
        let user = await User.findOne({email : req.body.email})
        //checking email
        if(user){
            return res.status(400).send({message : "Email already exists" })
        }

        // if new user, create it or allow to register;
        user = await User.create(req.body);

        const token = generateToken(user)
        return res.status(200).send({user, token});
    }
    catch(err){
        res.status(400).send({message : err.message})
    }

})

module.exports = router;