const Item = require("./models/listing")
const Review = require("./models/review")





module.exports.isLoggedIn = (req , res , next) => {
    if(!req.isAuthenticated()){
        req.flash("error" , "you must be logged in to create listing");
       return res.redirect("/login")
      }
      next();
}
module.exports.isOwner = async(req , res , next ) => {
    let{id} = req.params;
    let item =await Item.findById(id);
    if(!item.owner.equals(res.locals.currUser._id)){
        req.flash("error" , "You don't have Authority to Update");
        return res.redirect(`/items/${id}`);
    }
    next()
}
module.exports.isauthor = async(req , res , next ) => {
    let{id , reviewId} = req.params;
    let review =await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error" , "You didn't create the review");
        return res.redirect(`/items/${id}`);
    }
    next()
}