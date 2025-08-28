
var express=require('express');
var app=express();



app.get("/",(req, res)=>{
    res.send(
            "<h1>Vijay Sales </h1>"
            +"<hr/>"
            +"<h3>Smart Devices for sale</h3>"
            + "<br/>"
            + "<ol>"
          
    );
});

app.get("/aboutus",(req, res)=>{
    res.send(
            "<h1>Room 3 </h1>"
            +"<hr/>"
            +"<h3>Doing ordinary things extraordinarily</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Chief Mentor: Ravi Tambade</li>"
            +"<li>Director: Shubhangi Tambade</li>"
            +"<li>Subject Matter Expert: Rohit Gore</li>"
            + "</ol>"
    );
});
var server=app.listen(8080);
console.log("Vijay Sales Online shopping running on port 8080");




