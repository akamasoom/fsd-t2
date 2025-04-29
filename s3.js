const express=require("express");
var app=express();
const es=require("express-session");
app.use(es({
    //resave:false,
    //saveUninitialized:false,
    secret:"LJU123"
}));
app.use(express.static(__dirname,{index:"s3.html"}));
app.get("/save",(req,res)=>{
    req.session.uname=req.query.un;
    req.session.pass=req.query.pw;
    res.redirect("fetchdata");
});
app.get("/fetchdata",(req,res)=>{
    if(req.session.uname=="admin"&& req.session.pass=="admin@123"){
        res.send(`<h1>Welcome Admin</h1> <a href="/destroy">LogOut</a>`)
    }
    else{
        res.send('<h1>No user allowed Only Admin</h1><a href="/">Retry Login</a>')
    } 
});
app.get("/destroy",(req,res)=>{
    req.session.destroy()
    res.send(`<h1>Session Destroyed</h1><a href="/">Login</a>`)
});app.listen(8003)