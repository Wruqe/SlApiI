const router = require("express").Router();
const { User, Post, Comment} = require("../../models");

router.get("/", (req, res) => {
  Post.findAll({ include: [User, Comment] }).then((data) => {
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

//part of trying to add stars 
// router.put("/stars/:id", async(req, res) => {
//   const updatedPost = await Post.update(req.body, {where: {id: req.params.id}})
//   res.json(updatedPost)
// })

router.delete("/:id", (req, res) => {
  Post.destroy({ where: { id: req.params.id } }).then((response) => {
    res.json(response);
  });
});

module.exports = router


