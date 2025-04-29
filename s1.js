const express=require("express");
var app=express();
const es=require("express-session");
app.use(es({
    //resave:false,
    //saveUninitialized:false,
    secret:"LJU123"
}));
app.get("/test",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`<h1 style="color:red">You Have Visited ${req.session.page_views} times</h1>`);

    }
    else{
        req.session.page_views=1;
        res.send('<h1 style="color:blue">Thank You For Visiting</h1>');
    }
});app.listen(8001)