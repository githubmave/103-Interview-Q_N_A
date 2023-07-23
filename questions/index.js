const express = require("express");
// const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const posts = {};

app.get("/questions", (req, res) => {
  // res.send(posts);
  res.send(r es.body.content)
});

app.post("/questions", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { content } = req.body;

  posts[id] = {
    id,
    content,
  };

  // await axios.post("http://event-bus-srv:4005/events", {
  //   type: "PostCreated",
  //   data: {
  //     id,
  //     title,
  //   },
  // });

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
