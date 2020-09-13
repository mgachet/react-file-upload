const router = require("express").Router();
const uploadRoutes = require("./upload");

// Post routes
router.use("/upload", uploadRoutes);

module.exports = router;
