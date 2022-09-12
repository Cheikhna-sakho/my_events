const router = require("express").Router();
const userController = require("../controllers/user");

// router.get("/", user.user);
router.get("/", userController.all);
router.put("/updatebio", userController.updateBio);

module.exports = router;
