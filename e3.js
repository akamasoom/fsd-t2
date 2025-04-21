var express=require('express')
var app=express()
var student={"name":"Mann","age":20}
app.get("/",(req,res)=>{
    //res.write(JSON.stringify(student))
    //res.write(student.age+" ")
    res.send(student.age+" ")
})
app.get("/json",(req,res)=>{
    res.json(student)
})
app.listen(5002)