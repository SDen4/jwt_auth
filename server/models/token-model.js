const {Schema, model} = require('mongoose');

// create user Scheme with user's data
const TokenSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  refreshToken: {type: String, required: true},
})

module.exports = model('Token', TokenSchema);