const express = require("express");
const path = require('path');
const friendsRouter = require("./routes/friends.routes")
const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use('/site', express.static(path.join(__dirname, '..','public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
      title: 'My Friends Are VERYY Clever',
      caption: 'Let\'s go skiing!',
    });
  });


app.use("/api/friends", friendsRouter)


app.get("/api", (req, res) =>{
    res.json({'message': 'Api V0.0.0'});
 });

app.listen(3000, () => {
    console.log("Server Started");
});