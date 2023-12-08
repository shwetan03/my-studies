const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const {MongoClient} = require("mongodb");
const dbName = 'mongodb://localhost:27017/';
/*var http = require('http'); */
const port = 3000;
const add_task = require('./models/add_task.js');
const main_controller = require('./controllers/main_controller.js');
const find_account = require('./models/find_account.js');
const passport = require('passport');
const cookieSession = require('cookie-session');
const studentUser = require('./models/user_model.js');
const parentUser = require('./models/user_model.js');
const cors = require('cors');

const mongoose = require('mongoose');
const { assert } = require('console');
mongoose.connect('mongodb://localhost:27017/myStudiesDB', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

// var dbConn = mongodb.MongoClient.connect(dbName, { useNewUrlParser: true, useUnifiedTopology : true });

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'views')));
app.set("view engine", "ejs");
app.set('views', './views');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    cookieSession({
        name: 'user-session',
        secret: 'COOKIE_SECRET',
        httpOnly: true
    })
);



/* app.use(session({
    secret: 'this is the secret key',
    resave: false,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(studentUser.createStrategy());
passport.serializeUser(studentUser.serializeUser());
passport.deserializeUser(studentUser.deserializeUser());

passport.use(parentUser.createStrategy());
passport.serializeUser(parentUser.serializeUser());
passport.deserializeUser(parentUser.deserializeUser());
 */


app.use('/', main_controller);



app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});