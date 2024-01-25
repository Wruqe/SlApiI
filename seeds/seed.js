
const sequelize = require("../config/connection");
const { User, Post, Comment} = require("../models");

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

  // for (const post of postData) {
  //   const userIndex = Math.floor(Math.random() * users.length);
  

  //   await Post.create({
  //     ...post,
  //     user_id: users[userIndex].id,
  //     imageUrl: `/images/${postData.imageFileName}`,
  //   });

    // for (const commentData of postData.comments) {
    //   await Comment.create({
    //     ...commentData,
    //     userId: users[Math.floor(Math.random() * users.length)].id,
    //     postId: post.id,
    //   });
    // }
  // }

  process.exit(0);
};

seedDatabase();
