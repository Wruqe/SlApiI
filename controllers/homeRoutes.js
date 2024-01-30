const router = require("express").Router();
const { User, Post, Comment, Star } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User, Comment, Star],
    });
    // let totalStars = 0;
    // let averageStars = 0;
    // postData.forEach(async (post) => {
    //   const starArray = post.stars;
    //   starArray.forEach((star) => {
       
    //     totalStars += star.starNum;
    //     averageStars = totalStars / starArray.length;
    //   });
    //   const updatedPosts = await Post.update({starAverage:averageStars}, {where: {id:post.id}})
    // });

    const posts = postData.map((post) => post.get({ plain: true }));
// 

    res.render('homepage', {
      posts,
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
