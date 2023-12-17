const express = require('express')
const app = express()
const port = 3000
// import ppp from './dist/index.html'
const fs = require('fs')
app.get('/', (req, res) => {
  // console.log(req)
  const path = './dist/index.html'
  fs.readFile(path,'utf8',(err,data)=>{
    if (err){
      res.status(500).send("error hai bhaiyaji")
      return
    }
    res.send(data)
  })
  
})


app.listen(port, () => {
  console.log("listen port first")
  console.log(`Example app listening on port ${port}`)
  
}) 