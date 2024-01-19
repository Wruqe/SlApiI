const User = require("./user");
const Post = require("./post");
const Comment = require("./comment")


User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
  });
  
  Post.belongsTo(User, {
    foreignKey: "user_id",
  });
  
  Post.hasMany(Comment, {
    foreignKey: "post_id",
  });
  
  Comment.belongsTo(Post,{
    foreignKey: "post_id",
  });
  
  Comment.belongsTo(User, {
    foreignKey: "user_id",
    as: "user", 
  });
  
  module.exports = { User, Post, Comment };
