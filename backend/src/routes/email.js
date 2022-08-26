const express=require("express");
const route=express.Router();
const controller=require("../controllers/emailController");


route.get("/send",req,res=>{
    controller.sendEmail();
})