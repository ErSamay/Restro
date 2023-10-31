const express  = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema} = require("../schema.js")
const ExpressError = require("../utils/ExpressError.js");
const Item = require("../models/listing.js");
const{isLoggedIn , isOwner } = require("../middleware.js");
const  listingController  = require("../controllers/listings.js");

const multer  = require('multer');
const{storage} = require("../cloudconfig.js")
const upload = multer({ storage  });


router.route("/")
.get(wrapAsync(listingController.index ))
.post( upload.single('Item[image]'),wrapAsync(listingController.postListing))



router.get("/new" ,isLoggedIn, listingController.renderNewForm)
router.route("/:id")
.get( wrapAsync(listingController.showListing ))
.put(isLoggedIn,isOwner ,wrapAsync(listingController.editPostListing) ) 
.delete(isLoggedIn,isOwner ,wrapAsync(listingController.deleteListing) )








router.get("/:id/edit" , isLoggedIn,isOwner ,wrapAsync (listingController.editListing))



module.exports = router;