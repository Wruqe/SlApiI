const express = require("express");
const router = express.Router();
const { Rating, Post } = require("../../models"); // Assuming your models are in the '../models' folder

// Endpoint to get ratings for a specific post
router.get("/post/:postId/ratings", async (req, res) => {
  try {
    const postId = req.params.postId;
    const ratings = await Rating.findAll({
      where: { post_id: postId },
    });
    res.json(ratings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// // Endpoint to create a rating for a post
// router.post("/post/:postId/ratings", async (req, res) => {
//   try {
//     const postId = req.params.postId;
//     const { rating_value } = req.body;

//     // Validate rating value (ensure it's within the allowed range, e.g., 1 to 5)
//     if (rating_value < 1 || rating_value > 5) {
//       return res.status(400).json({ error: "Invalid rating value" });
//     }

//     // Create a new rating and associate it with the post
//     const rating = await Rating.create({
//       rating_value,
//       post_id: postId,
//     });

//     res.status(201).json(rating);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

router.put("/:postId", async (req, res) => {
  console.log(req.params.postId);
  const response = await Post.findOne({ where: { id: req.params.postId } });
  let lastRating = response.rating;
  lastRating++;
  const updatedPost = await Post.update({rating: lastRating}, {where: {id:req.params.postId}})
  res.json(updatedPost);
});

module.exports = router;
