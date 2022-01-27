const express = require("express");
const { protect } = require("../controllers/authControllers");
const { geted, posted, getedSingle } = require("../controllers/productControllers");
const router = express.Router();

router.route("/").get(geted).post(posted);
router.route("/:id").get(getedSingle);
module.exports = router;
