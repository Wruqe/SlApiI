const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./userData.json");
const postData = require("./projectData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(
    userData.map((user) => ({
      ...user,
      imageUrl: `/images/${user.imageUrl}`,
    })),
    {
      individualHooks: true,
      returning: true,
    }
  );
  for (const post of postData) {
    const userIndex = Math.floor(Math.random() * users.length);

    const createdPost = await Post.create({
      ...post,
      user_id: users[userIndex].id,
      imageUrl: `/images/${post.imageFileName}`,
    });

    // Check if the post has ratings in your projectData.json
    if (post.ratings && post.ratings.length > 0) {
      for (const ratingValue of post.ratings) {
        await Rating.create({
          user_id: users[Math.floor(Math.random() * users.length)].id,
          post_id: createdPost.id,
          post_rating: ratingValue,
        });
      }
    }
  }

  process.exit(0);
};

seedDatabase();
