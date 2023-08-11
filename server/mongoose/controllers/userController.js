const User = require("../models/UserModal");

exports.userCreate = async (ctx) => {
  try {
    const { name, userId } = ctx.request.body;
    console.log(name, userId);
    await User.create({ name, userId });
    ctx.status = 200;
    ctx.body = {name,userId};
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

exports.getUsers = async (ctx) => {
  try {
    const allUsers = await User.find();
    // below part works as res.status(200).json(allUsers)
    ctx.status = 200;
    ctx.body = allUsers;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
};

exports.deleteUser = async (ctx) => {
  try {
    const { userId } = ctx.request.body;
    console.log(userId);
    await User.deleteOne({ userId: userId });
    ctx.status = 200;
    ctx.body = {
      message: "User deleted successfully",
      success:true
    };
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
};

exports.updateUser = async (ctx) => {
  try {
    const  updateId = ctx.params.id;
    const updatedFields = ctx.request.body;
    console.log('=====>',updateId,updatedFields)

    const updateUser = await User.findByIdAndUpdate(
      updateId,
      { $set: updatedFields },
      { new: true } // Return the updated document
    );

    if (updateUser) {
      ctx.body = { message: "Document updated successfully", updateUser };
    } else {
      ctx.status = 404;
      ctx.body = { message: "Document not found" };
    }
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
};
