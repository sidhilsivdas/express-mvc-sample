const friendsModel = require("../models/friends.model")
const friendsController = {
    getAllFriends: function(req, res) {
       res.json(friendsModel)
    },
    getOneFriend : (req, res) =>{
        const friendId = req.params.friendId;
        const friend = friendsModel[friendId];
        if(friend){
            res.json(friend)
        }else{
            res.status(401).json({'status':'error',"message":"Item Not found"})
        }
        
    },

    addFriend: (req, res) => {
        const postData = {
            "name": req.body.name,
            "id": friendsModel.length
        };
        friendsModel.push(postData);
        res.json(postData);
    },

    updateFriend: (req, res) => {
        const friendId = req.params.friendId;
        friendsModel[friendId].name = req.body.name;
        res.json(friendsModel[friendId]);
    }

}

module.exports = friendsController;