
const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./userData.json");
const projectData = require("./projectData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(
    userData.users.map((user) => ({
      ...user,
      imageUrl: `/images/${user.imageUrl}`,
    })),
    {
      individualHooks: true,
      returning: true,
    }
  );

  for (const postData of projectData.posts) {
    const userIndex = Math.floor(Math.random() * users.length);
    const user = users[userIndex];

    const post = await Post.create({
      ...postData,
      userId: user.id,
      imageUrl: `/images/${postData.imageFileName}`,
    });

    for (const commentData of postData.comments) {
      await Comment.create({
        ...commentData,
        userId: users[Math.floor(Math.random() * users.length)].id,
        postId: post.id,
      });
    }
  }

  process.exit(0);
};

seedDatabase();
