const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
require('dotenv').config();

const userSchema = mongoose.Schema({
     fname: { type: String, required: true }, 
     lname: { type: String, required: true },
     email: { type: String, unique: true, required: true },
     pswd: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

const studentUser = User.discriminator('studentUser',
  new mongoose.Schema({ associatedParentID: { type: String } }));

const parentUser = User.discriminator('parentUser',
  new mongoose.Schema({ associatedStudentID: { type: String, required: true } }));

module.exports = studentUser, parentUser;
