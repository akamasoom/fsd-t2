const express=require("express")
const app=express()
const multer=require("multer")
app.get("/",(req,res)=>{
    res.render(__dirname+"/mult2.pug")
})
const store=multer.diskStorage({destination:"lju",filename:function(req,file,cb){
    cb(null,file.fieldname+"-"+Date.now()+"pdf")
}})
const upload=multer({storage:store})
app.post("/data",upload.array("mypdf",3),(req,res)=>{
    const file=req.files;
    console.log(file)
    if(file){
        for(i of file){                                           
            res.write(`<h1>${i.filename} has been uploaded.</h1>`)
        }
    }res.send()
});app.listen(8003)