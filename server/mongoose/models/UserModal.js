const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  userId: {
    type: Number,
    required: true
  },
});


const User = model('User', userSchema);

module.exports = User;