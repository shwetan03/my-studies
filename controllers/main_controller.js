const express = require('express');
const router = express.Router();
const manage_tasks_route = require('./manage_tasks_route');
const add_task_route = require('./add_task_route');
const settings_route = require('./settings_route');
const create_account_route = require('./create_account_route');
const home_route = require('./home_route');
var fs = require('fs');
const app = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const login_route = require('./login_route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'views')));

/* app.get('/', function(req, res) {
  res.render('../views/login.ejs');
});

app.post('/', 
passport.authenticate('local', {
  failureRedirect: '/',
  successRedirect: '/manage_tasks',
})),
(req, res) => {
  console.log(req.user);
} */

/* 
const bcrypt = require('bcrypt');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const uuid = require('uuid');
router.use(passport.initialize());
router.use(passport.session());
const LocalStrategy = require('passport-local');
const find_account = require('../models/find_account.js');



passport.use(new LocalStrategy(
  {
    emailField: 'email'
  },
  (email, pswd, done) => {
    userData = find_account.find(email);
    let passwordCheck = bcrypt.compareSync(pswd, userData.pswd);
    if (email == userData.email && passwordCheck) {
      return done(null, userData);
    }
  }
)); */

/* 
router.get('/', function(req, res) {
  res.render('../views/login.ejs');
});

router.post('/', function(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    req.login(user, (err) => {
      res.redirect('/home');
    })
  }) (req, res, next);
})

router.use (session({
   genid: (req) => {  
   return uuid() // use UUIDs for session IDs
   },
   store: new FileStore(),
   secret: 'any key is fine',
   resave: false,
   saveUninitialized: true
}))
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User(id, function(err, user) { 
        loggedInUser = user;
        done(err, user);
});
}); */

app.use('/', home_route)

app.use('/manage_tasks', manage_tasks_route);
app.use('/settings', settings_route);
app.use('/add_task', add_task_route);
app.use('/create_account', create_account_route);
app.use('/login', login_route);

  
// Final error message -- must be at the end of the request handling process
app.use(function(err, req, res) {
    console.error(err.stack);
    res.render('Something broke!');
    res.render('error');
  });

module.exports = app;