const {Schema, model} = require('mongoose');

// create user Scheme with user's data
const UserSchema = new Schema({
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  isActivated: {type: Boolean, default: false},
  activationLink: {type: String},
})

module.exports = model('User', UserSchema);