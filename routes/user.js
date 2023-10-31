const express  = require("express");
const router = express.Router();
const User = require("../models/user.js");
const { route } = require("./listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");

const ExpressError = require("../utils/ExpressError.js");
const  userController  = require("../controllers/users.js");



router.get("/signup" , userController.signupShow)
router.post("/signup" , wrapAsync(userController.signupPost));

router.get("/login" , userController.loginForm )

router.post("/login" ,
passport.authenticate("local" , {
    failureRedirect : "/login" , 
    failureFlash : true,
}) , userController.loginPost
);

router.get("/logout" ,userController.loginShow)


module.exports = router;
