```js
const express = require("express");
const zod = require("zod")
const app = express();
const bodyParser = require('body-parser')
// const schema = zod.array(zod.number());
app.use(bodyParser.json());
const middleware1 = (req,res,next)=>{
  console.log("into the middleware1")
  next()
}
const middleware2 = (req,res,next)=>{
  console.log("into the middleware2")
  next()
}

app.use(middleware2)
app.use(middleware1)

app.get('/',(req,res)=>{
    console.log("can handle the req")
    res.status(200).send("done")
})

// app.get('/abc',(req,res)=>{
//     console.log("can handle the req")
//     res.status(200).send("done")
// })
app.listen(3000)
```
- the app.use(path,middlewareFunction) takes these two inputs
- path is just specific route if u want them to be used before specific route
- changeing the order of middleware will change execution order too
- if u want to use a middleware before some route then app.use(middleware) shud be used before the route else it wont work
- next() allows to forward req,res to next function or middleware 
- if we want to pass some additional data from one middleware to another we kinda add that to `req` only req.`body.data = 123` like this 
