const User = require("../models/user.js");

module.exports.signupShow =  (req   , res) => {
  res.render("users/signup.ejs")
}

module.exports.signupPost = async(req , res) => {
    try {
      let{username ,email , password} = req.body ; 
      const newUser = new User({email , username});
      const registeredUser =  await User.register(newUser , password);
  
      // console.log(registeredUser);
      req.login(registeredUser , (err) => {
          if(err){ 
              return next(err);
          }
          req.flash("success" , "Welcome to Restro");
      res.redirect("/items")
      })
      
    }
    catch(e){
      req.flash("error" , e.message);
      res.redirect("/signup")
    }
    
  };

 
  module.exports.loginForm  =    (req   , res) => {
    res.render("users/login.ejs")
}

  module.exports.loginPost =   async(req , res) => {
    req.flash("success" , "Welcome To Restro ! You Are Logged in");
    res.redirect("/items");
 }


 module.exports.loginShow =  (req , res , next) => {
    req.logout((err) => {
        if(err){
           return next(err);
        }
        req.flash("success" , "you are logged out!");
        res.redirect("/items")

    })
}
