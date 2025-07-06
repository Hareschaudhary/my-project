import express from "express";
const app = express();
import session from "express-session";

app.use(session({
    secret:"secretpassword",
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge: 1000*60*60* 24},
}))
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/set-session", (req, res) => {
    req.session.username = "hareshchaudhary"
    res.send("set session");
});

app.get("/get-session", (req, res) => {
    if(req.session.username){  
    res.send(`username is ${req.session.username}`);  
    }else{
        res.send("username is not found");  
    }
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});
