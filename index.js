const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const user = ["", "userOne", "userTwo", "userthree", "userFour"];
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const name = user[id];
  res.send({ name, id });
});

// post
app.post("/adduser", (req, res) => {
  //   console.log('recive data',req.body);
  const user = req.body;
  user.id = 55;
  res.send(user);
});
app.listen(3000, () => console.log("Listening port 3000"));
