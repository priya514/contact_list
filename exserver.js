var express=require("express");
var app=express();
var mongoose= require("mongoose");
var Contact=require("./modulejs/contact");


mongoose.connect("mongodb://localhost/contact_list", function(){
 console.log("sucess");
});

var PORT=process.env.PORT  || 3000

app.use(express.static(__dirname + "/public"))
app.get("/contactlist", function(req,res){
 Contact.getContacts(function(err, data){
 	if(err){
 		throw err;
 	}
 	res.json(data);
 
})
})
app.listen(PORT, function(){
	console.log("my server");
})