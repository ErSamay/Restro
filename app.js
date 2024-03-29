if(process.env_Node_ENV != "production"){
    require('dotenv').config()
}


const express  = require("express");
const app = express();
const path = require("path")
const engine = require('ejs-mate')
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session")
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport")
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const itemRouter = require("./routes/listing.js")
const reviewRouter = require("./routes/review.js")
const userRouter = require("./routes/user.js");
const { func } = require('joi');


const MONGO_URL = "mongodb+srv://raksha:raksha123@cluster0.9isff6a.mongodb.net/?retryWrites=true&w=majority"

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}



app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname ,"views"))
app.use(express.urlencoded({extended : true}));
app.use(express.static("./public"))
app.use(methodOverride("_method"))
app.engine('ejs', engine);


const store = MongoStore.create({
    mongoUrl : MONGO_URL , 
    crypto :{
      secret : process.env.SECRET, 
    },
    touchAfter : 24 * 3600
  })
  
  store.on("error" , () => {
    console.log("Error in Mongo Store" , err);
  });


const sessionOptions = {
    secret : "mysupersecretcode" , 
    resave : false , 
    saveUninitialized : true , 
    cookie : {
        expires : Date.now() + 7 * 24 *60 * 60 *1000 , 
        maxAge : 7 * 24 *60 * 60 *1000,
        httpOnly : true , 

    }

};
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req , res  , next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})


app.use("/items" , itemRouter);
app.use("/items/:id/reviews" ,  reviewRouter )
app.use("/" , userRouter);



app.all("*" , (req , res , next) => {
    next(new ExpressError(404 , "Page not found"))
}) 

app.use((err , req , res ,next) =>{
    let{status = 500 , message="something went wrong"} = err;
    res.status(status).render("error.ejs" , {message});
}) 
app.listen(3000);