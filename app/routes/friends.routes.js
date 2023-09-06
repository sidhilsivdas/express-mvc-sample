const express = require("express");
const friendsController = require("../controllers/friends.controller");
const router = express.Router();

router.get("/", friendsController.getAllFriends);
router.get("/:friendId", friendsController.getOneFriend);
router.post("/", friendsController.addFriend);
router.put("/:friendId", friendsController.updateFriend);

module.exports = router;