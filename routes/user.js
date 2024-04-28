const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/about-me");

const infoSchema = mongoose.Schema({
    email:String,
    mobile:Number,
    message:String
})

module.exports = mongoose.model("infomodel",infoSchema)