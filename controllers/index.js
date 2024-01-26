const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const profileRoutes = require("./profileRoutes");
const testRoutes = require("./testSocket");
const postRoutes = require('./postRoutes')

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);
router.use("/test", testRoutes);
router.use("/posts", postRoutes)
module.exports = router;
