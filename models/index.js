const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
const Star= require("./star");
// const Rating = require("./rating")

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


Post.hasMany(Star, {
  foreignKey: "post_id",
})

Star.belongsTo(Post, {
  foreignKey: "post_id",
})


// Comment.belongsTo(User, {
//   foreignKey: "user_id",
//   as: "user",
// });


module.exports = { User, Post, Comment, Star};
