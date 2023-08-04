const { model, Schema } = require('mongoose');

const messageSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  authorId: {
    type: Boolean,
    required: true
  },
  timestamp: {
    type: Number,
    required: true,
    default: Date.now()
  }
});


const Message = model('Message', messageSchema);

module.exports = Message;