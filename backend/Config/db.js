const mongoose = require("mongoose");

require("dotenv").config();

const Connection = mongoose.connect("mongodb+srv://kaustubh:123@cluster0.jengsso.mongodb.net/TutionClass?retryWrites=true&w=majority");

module.exports=Connection;
