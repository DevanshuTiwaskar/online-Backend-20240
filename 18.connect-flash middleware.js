//connect-flash middleware



const express =require('express');
const app = express();
const expressSession = require('express-session')
const flash = require('connect-flash')


//setup express-session
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "secret-key"
}))


//setup flash session
app.use(flash());



app.get('/', (req, res) => {
    req.flash("error","Invalid credentials")
    res.redirect('/error');
})

app.get('/error', (req, res) => {
    let message = req.flash('error');
    res.send(message);
})

app.listen(3000);