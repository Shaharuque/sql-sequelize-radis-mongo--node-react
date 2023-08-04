const Message = require("../models/MessageModal");


//get messages
exports.getMessages = async (ctx) => {
  try {
    const messages = await Message.find();
    ctx.body = messages;
    ctx.status = 200;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

exports.postMessage = async (ctx) => {
  try {
    const { content, authorId, timestamp } = ctx.request.body;
    await Message.create({ content, authorId, timestamp });
    ctx.status = 201;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};
