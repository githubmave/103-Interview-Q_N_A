const express = require("express");
// const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

// const commentsByPostId = {};
const answersByQuestionId = {};

// app.get("/posts/:id/comments", (req, res) => {
  app.get("/questions/:id/answers",(req,res)=>{ 
  // res.send(commentsByPostId[req.params.id] || []);
  res.send(answersByQuestionId[req.params.id] || []);
});

// app.post("/posts/:id/comments", async (req, res) => {

app.post("/questions/:id/answers", async (req,res) =>{
  const answerId = randomBytes(4).toString("hex");
  const { content } = req.body;

  // const comments = commentsByPostId[req.params.id] || [];
  const answers = answersByQuestionId[req.params.id] || [];

  // comments.push({ id: commentId, content, status: "pending" });
  answers.push({id:answerId, content, status:"pending" })

  // commentsByPostId[req.params.id] = comments;
  answersByQuestionId[req.params.id] = answers;

  await axios.post("http://localhost:4005/events", {
    // type: "CommentCreated",
    type: "AnswerCreated",
    data: {
      id: answerId,
      content,
      // postId: req.params.id,
      quesId: req.params.id,
      status: "pending",
    },
  });

  res.status(201).send(answers);
});

app.post("/events", async (req, res) => {
  console.log("Event Received:", req.body.type);

  const { type, data } = req.body;

  if (type === "AnswerModerated") {
    const { quesId, id, status, content } = data;
    const answers = answersByPostId[quesId];

    const answer = answers.find((answer) => {
      return answer.id === id;
    });
    answer.status = status;

    await axios.post("http://localhost:4005/events", {
      type: "AnswerUpdated",
      data: {
        id,
        status,
        quesId,
        content,
      },
    });
  }

  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
