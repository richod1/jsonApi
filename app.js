const express=require('express')
const app=express()
const BodyPaser=require("body-parser")
const cors=require("cors")
// const db=require("./airbnb.json")
const port=3000;
const router=require("./route/route")

app.use(cors())
app.use(BodyPaser.json())
app.use(BodyPaser.urlencoded({extended:true}))

// route middleware
app.use("/api",router)

// app.get("/api/airbnb",(req,res)=>{
//   return  res.status(200).json(db)
// })

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`server is up ${port}`)
})
