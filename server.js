var express=require("express");
var app=express();
var mongoose= require("mongoose");
var Contact=require("./modulejs/contact");
var bodyParser=require("body-parser");

mongoose.connect("mongodb://localhost/contact_list", function(){
 console.log("sucess");
});

var PORT=process.env.PORT  || 3000

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());

app.get("/contactlist", function(req,res){
 Contact.getContacts(function(err, data){
 	if(err){
 		throw err;
 	}
 	res.json(data);

})
})

 app.post("/contactlist",function(req,res){
 var body=req.body;
 Contact.addContact(body, function(err,data){
 	if(err){
throw err;
 	}
res.json(data);
 })
 })
app.get("/contactlist/:id", function(req,res){
	var id=req.params.id;
	console.log(id);
	Contact.getContactById(id, function(err,data){
		if(err){
			throw err;
		}

		res.json(data);
	})
})

app.put("/contactlist/:id",  function(req,res){
var  id= req.params.id;
var body=req.body;
Contact.updateContact(id, body, function(err,data){
	if(err){
		throw err;
	}
	res.json(data);
	})

})
app.delete("/contactlist/:id", function(req,res){
	var id=req.params.id;
	Contact.removeContact(id, function(err, data){
		if(err){
			throw err;

		}
		res.json(data);
	})
})




app.listen(PORT, function(){
	console.log("my server");
})