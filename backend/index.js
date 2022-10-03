const express=require("express")
const app=express()
app.use(express.json())

require('dotenv').config()

const Connection = require("./Config/db")
var cors = require('cors')

var logRouter=require("./Routes/Login.route")
var studentRouter=require("./Routes/Student.route")

app.use(cors())


app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
})

app.use("/auth",logRouter)
app.use("/student",studentRouter)

app.listen(process.env.PORT,async()=>{
    try{
        await Connection
        console.log("PORT started at 8080",process.env.PORT)
    }
    catch(err){
        console.log(err);
    }
})