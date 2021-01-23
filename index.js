var Express=require("express");
var bodyparser=require("body-parser");
var mongoose=require("mongoose")
var {bookModel}=require("./model/book")

var app=Express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.post("/read", async(req,res)=>{
    try{
    var data=req.body;
    
    var bookdata=new bookModel(req.body);
    
    var result=await bookdata.save();
    res.json(result)
    
    
    }
    
    catch(error){
    res.status(500).send(error)
    }
    })



    app.get("/viewall",async(req,res)=>{

        try{
           
            var result= await bookModel.find();
    
            res.json(result);
            
    
        }
        catch(error){
            console.log(error)
            res.status(500).send(error)
        }
    
    })






app.listen(process.env.PORT || 3000, (error)=>{

    if(error){
        console.log("Error")
    }
    else{
        console.log("Server running")
    }
    })