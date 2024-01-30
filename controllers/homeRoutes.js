const router = require("express").Router();
const { User, Post, Comment, Star } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
        include: [{ model: User }, {model: Comment }], 
      });
      let userData;
      let user;
      if (req.session.logged_in) {
        userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
        });
         user = userData.get({ plain: true });
      } else {
        user = {}
      }
    const posts = postData.map(post => post.get({ plain: true }));

    res.render('homepage', {
      ...user,
      posts,
      chat_name: user.user_name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
