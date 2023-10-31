const express  = require("express");
const router = express.Router({mergeParams : true});
const {reviewSchema} = require("../schema.js")
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Item = require("../models/listing.js");
const{isLoggedIn , isauthor} = require("../middleware.js")
// const  reviewController  = require("../controllers/listings.js");



const validateReview = (req , res , next) => {
    let {error}= reviewSchema.validate(req.body);
    if(error){
         let errMsg = error.details.map((el) => el.message).join(",");
     throw new ExpressError(400 , error);
    }else{
        next();
    }
}

router.post("/" ,isLoggedIn ,  validateReview , wrapAsync(async(req , res) => {
    // let{id} = req.params;
   let item =  await Item.findById(req.params.id);
   let newReview = new Review(req.body.review)
   newReview.author = req.user._id
    item.reviews.push(newReview);
    await newReview.save();
    await item.save();
    req.flash("success" , "review created")
  res.redirect(`/items/${item._id}`)

  }))
 
 
 router.delete("/:reviewId" ,isLoggedIn , isauthor, wrapAsync( async(req , res) => {

    let{id , reviewId} = req.params;
    await Item.findByIdAndUpdate(id , {$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success" , "Review Deleted")
    res.redirect(`/items/${id}`);

}))
 
 



module.exports = router;
