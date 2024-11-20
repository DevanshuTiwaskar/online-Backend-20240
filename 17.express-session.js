const express = require('express');
const app = express();
const expressSession = require('express-session');

app.use(expressSession({
    secret: "random stuff", // Secret for signing the session ID cookie
    resave: false, // Avoid resaving session data if it hasn't changed
    saveUninitialized: false // Don't save uninitialized sessions
}));

app.get("/", function(req, res) {
    res.send("Hello, World!");
});

// Create session variable
app.get("/create", function(req, res) {
    console.log("Before setting session:", req.session);
    req.session.username = "devanshu";  // Setting session variable
    console.log("After setting session:", req.session);
    res.send("Session created!");
});

// Retrieve session variable
app.get('/get-session', (req, res) => {
    console.log("Session data:", req.session);
    if (req.session.username) {
        res.send(`Hello, ${req.session.username}`); // Accessing session data
    } else {
        res.send('No session data found.');
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
