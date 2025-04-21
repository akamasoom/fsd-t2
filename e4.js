var express = require("express");
var app = express();
var s = { d: [{ "name": "A", "id": 1 }, { "name": "B", "id": 2 }] };

app.get("/", (req, res) => {
    res.set("content-type","text/html")
    //res.write("<table border='1px solid'><tr><th>Name</th><th>id</th></></tr>");
    var a=s.d.sort((a,b)=>b.id-a.id)
    // for(i of s.d){
    //     res.write(`<tr><td>${i.name}</td><td>${i.id}</td></tr>`)
    // }
    for(i of a){
        res.write(`<center><h1>${i.id}=${i.name}</h1></center>`)
    }
    //res.write("</table>")
    res.send()
})
app.listen(7000)