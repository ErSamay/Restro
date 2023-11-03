
const Item = require("../models/listing.js");

module.exports.index = 

async(req , res) => {
    const allItems = await Item.find({});
    res.render("./listings/index.ejs" , {allItems});
}
module.exports.renderNewForm = (req , res) => {
    res.render("./listings/new.ejs" );
  }

  module.exports.showListing =  async(req , res) => {
    let{id} = req.params;
    let item = await Item.findById(id)
    .populate({
     path:"reviews" ,
     populate : {
         path:"author",
     }}).populate("owner");
 if(!item){
     req.flash("error" , "Item You Requested for does not exist");
     res.redirect("/items");
 
 }
//  console.log(item);
    res.render("./listings/show.ejs" , {item});
 }

 module.exports.postListing =  async(req , res , next) => {

    let url = req.file.path;
    let filename = req.file.filename;
    const newItem =   new Item(req.body.Item);
    newItem.owner = req.user._id;
    newItem.image = {url , filename};
    await newItem.save();
    req.flash("success" , "new food item created")
    res.redirect("/items")

}

module.exports.editListing =  async(req , res , next) => {
    let{id} = req.params;
    let item = await Item.findById(id);
    res.render("./listings/edit.ejs" , {item}); 
}


module.exports.editPostListing =  async(req , res , next) => {
    let{id} = req.params;
    await Item.findByIdAndUpdate(id , {...req.body.Item});
    req.flash("success" , "Your Item Updates")
    res.redirect("/items");

}

module.exports.deleteListing = async(req , res) => {
    let{ id } = req.params;
    let item = await Item.findByIdAndDelete(id);
    req.flash("success" , "Item deleted")
    res.redirect("/items");
}