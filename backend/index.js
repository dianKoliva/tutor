const express=require("express");
require("./src/models/db");

const app=express();

app.listen(3000,()=>{
    console.log("Listening on port 300");
})



