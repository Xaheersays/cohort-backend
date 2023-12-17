const express = require("express");
const zod = require("zod")
const app = express();
const bodyParser = require('body-parser')
// const schema = zod.array(zod.number());
app.use(bodyParser.json());
const middleware1 = (req,res,next)=>{
  console.log(req)
  req.data123 = 123
  console.log(req)
  console.log("into the middleware1")
  next()
}
const middleware2 = (req,res,next)=>{
  console.log("into the middleware2")
  next()
}

const mc = (req,res)=>{
  console.log("jjjkdsjakjda")
  res.send("sddsd")
}

app.use(middleware2)
app.use(middleware1)

app.get('/',(req,res,next)=>{
    console.log("can handle the req")
    mc(req,res)
}) 

// app.get('/abc',(req,res)=>{
//     console.log("can handle the req")
//     res.status(200).send("done")
// })

app.listen(3000)
