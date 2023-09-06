const express = require("express");
const friendsRouter = require("./routes/friends.routes")
const app = express();
app.use(express.json());


app.use("/api/friends", friendsRouter)


app.get("/api", (req, res) =>{
    res.json({'message': 'Api V0.0.0'});
 });

app.listen(3000, () => {
    console.log("Server Started");
});