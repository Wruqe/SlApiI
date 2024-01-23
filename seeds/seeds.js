
const sequelize = require("../config/connection");
const { User, Project } = require("../models");

const userData = require("./userData.json");
const projectData = require("./projectData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

    // Seed users with images
  const users = await User.bulkCreate(
    userData.users.map((user) => ({
      ...user,
      imageUrl: `/images/${user.imageUrl}`, // Assuming imageUrl is the property holding the image file name
    })),
    {
      individualHooks: true,
      returning: true,
    }
  );

  // Seed posts, comments, and associate with users
  for (const postData of projectData.posts) {
    const userIndex = Math.floor(Math.random() * users.length);
    const user = users[userIndex];

    const post = await Post.create({
      ...postData,
      userId: user.id,
      imageUrl: `/images/${postData.imageFileName}`, // Adjust this based on your project structure
    });

    // Seed comments and associate with posts
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
