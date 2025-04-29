const express=require("express");
var app=express();
const es=require("express-session");
app.use(es({
    //resave:false,
    //saveUninitialized:false,
    secret:"LJU123"
}));
app.use(express.static(__dirname,{index:"s2.html"}));
app.get("/savesession",(req,res)=>{
    req.session.uname=req.query.un;
    req.session.pass=req.query.pw;
    res.redirect("fetchsession");
});
app.get("/fetchsession",(req,res)=>{
    res.send(`<h1>${req.session.uname}</h1><a href="/deletesession">LogOut</a>`);
    
});
app.get("/deletesession",(req,res)=>{
    req.session.destroy()
    res.redirect("/");
});app.listen(8002)