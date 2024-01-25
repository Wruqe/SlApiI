const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const ratingRoutes = require("./ratingRoutes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/ratings", ratingRoutes);

module.exports = router;
