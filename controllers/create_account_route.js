const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const add_account = require('../models/add_account.js');
const display_tasks = require('../models/display_tasks.js')
const get_accounts = require('../models/verify_sign_up.js');
const find_account = require('../models/find_account.js');
const email_validator = require('email-validator');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const studentUser = require('../models/user_model.js'); 
const parentUser = require('../models/user_model.js');
const bcrypt = require('bcrypt');


router.get('/', function(req, res) {
  res.render('../views/create_account.ejs', {check_email: false});
});

router.post('/', function (req, res) {
  var newUser;
    if (req.body.account_type == "student") {
      newUser = studentUser({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        pswd: req.body.pswd
      });
    } else {
      newUser = parentUser({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        pswd: req.body.pswd,
        associated_student_id: req.body.associated_student_id
      })
    }

    /* if (newUser.account_type == "parentUser" && newUser.associated_student_id == "") {
      
      return res.redirect('/create_account');
    }

    if (newUser.fname == "" || newUser.lname == "" || newUser.email == "" || newUser.pswd == "" || req.body.pswd_reenter == "") {
      return res.redirect('/create_account');
    }

    try {
      account = find_account.find_by_email(newUser.email);
      if (account != null) {
        return res.redirect('/create_account')
      }
    } catch (err) {
      res.status(400).send({message: "Error: something went wrong here!"});
    }
    
    if (newUser.account_type == "parentUser") {
      try {
        account = find_account.find_by_id(newUser.associated_student_id);
      if (account == null) {
        return res.redirect('/create_account');
      } else if (account.account_type == "parentUser") {
        return res.redirect('/create_account');
      }
    } catch (err) {
      res.status(400).send({message: "Error: something went wrong!"});
    }
    }
    
    
    if (newUser.pswd.length < 7) {
      return res.redirect('/create_account');
    }

    if (newUser.pswd != req.body.pswd_reenter) {
      return res.redirect('/create_account');
    }

    if (!email_validator.validate(newUser.email)) {
      return res.redirect('/create_account');
    } */

    add_account.add(newUser);

    return res.redirect('/manage_tasks');
});

module.exports = router;