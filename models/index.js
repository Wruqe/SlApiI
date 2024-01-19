const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
const Rating = require("./rating")

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

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

Post.hasMany(Rating, {
    foreignKey: "post_id",
});

Rating.belongsTo(Post, {
    foreignKey: "post_id",
});

module.exports = { User, Post, Comment, Rating };
