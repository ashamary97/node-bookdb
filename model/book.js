var mongoose=require("mongoose")
const bookSchema= new mongoose.Schema(
    {
        title:{type:String},
        price:{type:Number},
        author:{type:String}
    }
)
var bookModel= mongoose.model("books", bookSchema)
module.exports={bookModel}