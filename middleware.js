//git add .
// git commit -m "refactor authentication into middleware"
// git push
const express = require("express");
const app = express();

// Authentication middleware
function auth(req, res, next) {

    const username = req.headers.username;
    const password = req.headers.password;

    // Check authentication
    if (username !== "manu" || password !== "manu13") {
        res.status(403).json({
            msg: "Invalid user"
        });
        return;
    }

    // Authentication successful
    else
    next();
}


// Apply authentication middleware
// Every request coming to the routes below
// will first go through auth()
app.use(auth); // just have to write single time  and it  will check for all route


// GET route 1
app.get("/home", function(req, res) {
    res.send("Welcome to Home");
});


// GET route 2
app.get("/profile", function(req, res) {
    res.send("Welcome to Profile");
});


// POST route 1
app.post("/login", function(req, res) {
    res.send("Login successful");
});


// POST route 2
app.post("/signup", function(req, res) {
    res.send("Signup successful");
});


// Start server
app.listen(3000);

