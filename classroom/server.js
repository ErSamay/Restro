const express = require("express");
const app = express();
// const cookieParser = require("cookie-parser");
const session = require("express-session");



const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));

app.get("/register", (req, res) => {

    let { name = "anonymous" } = req.query{
        req.flash = req.params.("roor" , (res , res))
     }
    req.session.name = name;
    console.log(  req.session.name)
    res.send(name);
});

app.get("/hello", (req, res) => {
    res.send("HEllo");
  
});




app.listen(3000);