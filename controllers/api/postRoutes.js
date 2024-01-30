const router = require("express").Router();
const { User, Post, Comment, Star } = require("../../models");

router.get("/", (req, res) => {
  Post.findAll({ include: [User, Comment, Star] }).then((data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  const postObject = {
    title: req.body.title,
    description: req.body.description,
    user_id: req.session.user_id,
  };
  Post.create(postObject).then((postData) => {
    res.json(postData);
  });
});

router.post("/stars", async (req, res) => {
  const newStarRating = await Star.create(req.body);
  // console.log(req.body.post_id)
  const targetedPost = await Post.findOne({
    where: { id: req.body.post_id },
    include: [Star],
  });
  let totalStars = 0;

  let starEntries = targetedPost.stars.length;
  console.log(starEntries);
  targetedPost.stars.forEach((star) => {
    totalStars += star.star_num;
    
  });
  let averageStars = 0;
  averageStars = (totalStars / starEntries).toFixed(2);
// console.log(averageStars);
  const updatedPost = await Post.update({star_average:averageStars}, {where: {id:req.body.post_id}})
res.json(updatedPost)
});

router.delete("/:id", (req, res) => {
  Post.destroy({ where: { id: req.params.id } }).then((response) => {
    res.json(response);
  });
});

module.exports = router;
