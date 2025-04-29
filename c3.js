const cp=require("cookie-parser");
const express=require("express");
var app=express();
app.use(cp());
app.use(express.static(__dirname,{index:"c3.html"}));
app.get("/submit",(req,res)=>{
    var{un,eid,msg,rating}=req.query;
    var feedback ={un,eid,msg,rating};
    res.cookie("feedback",feedback,{maxAge:10000});
    res.send(`<h1>Thank You!</h1>
        <a href="/details">Details</a>`);
});
app.get("/details",(req,res)=>{
    var fb=req.cookies.feedback;
    if(fb){
        res.write(`<h1>Name: ${fb.un}</h1>`)
        res.write(`<h1>Email: ${fb.eid}</h1>`)
        res.write(`<h1>Message: ${fb.msg}</h1>`)
        res.write(`<h1>Rating: ${fb.rating}</h1>`)
        res.send()
    }
    else{
        res.send('No feedback available')
    }
});app.listen(8000)