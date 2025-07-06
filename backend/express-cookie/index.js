import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/set-cookie", (req, res) => {
    res.cookie("username", "HareshChaudhary", {
        maxAge: 900000,       // 15 minutes
        httpOnly: true,       // not accessible via client-side JS
    });
    res.send("Cookie has been set");
});

app.get("/get-cookie", (req, res) => {
    const username = req.cookies.username;
    if (!username) {
        res.send("No cookie found");
    } else {
        res.send(`Cookie found: ${username}`);
    }
});

app.get("/delete-cookie", (req, res) => {
    res.clearCookie("username");
    res.send("Cookie has been deleted");
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});
