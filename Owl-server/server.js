var express = require('express')
const path = require('path');
global.bodyParser = require('body-parser');
const expressValidator = require("express-validator");
const passport = require("passport");
var mongodb = require('mongodb');
global.mongoose = require('mongoose');
const port = process.eventNames.PORT || 3000

global.app = express();

//Body-parser
global.app.use(global.bodyParser.json(), global.bodyParser.urlencoded({ extended: true }));

//Routes
var home = require('./routes/home.js');
var catalog = require('./routes/catalog.js');
var book = require('./routes/book.js');
var suggest = require('./routes/suggest.js');
var login = require('./routes/login.js');
var signup = require('./routes/signup.js');
var profile = require('./routes/profile.js');
var achievements = require('./routes/achievements.js');
var rankings = require('./routes/rankings.js');


app.use("/", home)
app.use("/catalog", catalog)
app.use("/book", book)
app.use("/suggest", suggest)
app.use("/login", login)
app.use("/signup", signup)
app.use("/profile", profile)
app.use("/achievements", achievements)
app.use("/rankings", rankings)

app.listen(port, () => console.log("Server listening on port ", port))