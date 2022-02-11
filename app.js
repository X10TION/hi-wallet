const express = require ('express')
const app = express();

app.get("/", (req,res) =>  {
    res.send(  " <h1>home page </h1> ")
})

app.listen(5000, () => { 
    console.log(  "server start at port  : 500")
})