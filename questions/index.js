const express = require("express");
// const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const questions = {};

app.get("/questions", (req, res) => {
  // res.send(posts);
  res.send(questions);
});

app.post("/questions", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { detail } = req.body;

      questions[id] = {
        id,
        detail,
      };

  // await axios.post("http://event-bus-srv:4005/events", {
  await axios.post("http://localhost:4005/events", {

    type: "QuestionCreated",
    data: {
      id,
      detail,
    },
  });

  res.status(201).send(questions[id]);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
