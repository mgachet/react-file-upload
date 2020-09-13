const router = require("express").Router();
const uploadController = require("../../controllers/uploadController");

// Matches with "/api/upload"
router
  .route("/")
  .post(uploadController.create);


module.exports = router;
