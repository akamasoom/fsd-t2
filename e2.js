var express =require("express")
var app=express()
app.get("/branch/:branch/name/:name",(req,res)=>{
    res.send(req.params)
})
app.listen(5002)