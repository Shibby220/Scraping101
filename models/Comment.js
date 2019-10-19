var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  user: String,
  commentText: String,
  articleId: String,
  createTime: Date,
});

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
