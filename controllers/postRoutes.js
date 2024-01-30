const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require('../utils/auth');


router.get("/:id", withAuth, async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = await Post.findByPk(postId, { include: [User, Comment] });
    const post = postData.get({ plain: true });

    userData = await User.findByPk(req.session.user_id, {
      attributes: { include: ['user_name'] },
    });
     user = userData.get({ plain: true });


    res.render("post", {
      ...post,
      chat_name: user.user_name,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
