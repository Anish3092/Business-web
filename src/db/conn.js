const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb://localhost:27017/anishmishra").then(()=>{
    console.log("connection sucessful");
}).catch((err)=>{
    console.log(err);
})