const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");


// main().then((res) => {
//     console.log("db is working")
// }).catch((err) => {
//     console.log(err);
// })

// async function main(){
//    await mongoose.connect('mongodb://127.0.0.1:27017/majorproject');
// }


const listingSchema = new mongoose.Schema({
    title: {
        type : String ,
        required : true , 
    },
    description: {
        type : String,
    },
    price: {
        type : Number,
     
    },
    image :  {
            url : String , 
            filename : String , 
    },
    Famous_In: {
        type : String ,
    },
    About_Taste:{
        type : String ,
       
    },
    reviews : [
        {
            type: Schema.Types.ObjectId , 
            ref : "Review"
        }
    ],
    owner : {
        type : Schema.Types.ObjectId , 
        ref : "User" , 
    }

})
listingSchema.post("findOneAndDelete " , async(item) => {
    if(item){
        await Review.deleteMany({_id : {$in : item.reviews } });
    }
 
})

let Item = mongoose.model("Item" , listingSchema);
module.exports = Item;