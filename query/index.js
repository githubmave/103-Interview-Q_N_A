const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const questions = {};

const handleEvent = (type, data) => {
  // if (type === "PostCreated") {
    if( type === 'QuestionCreated'){
    // const { id, title } = data;
    const {id, detail} = data;

    // posts[id] = { id, title, comments: [] };
    questions[id] = {id, detail, answers:[]};
    }
  // if (type === "CommentCreated") {
    if ( type === 'AnswerCraeted') {
    const { id, content, quesId, status } = data;

    // const post = posts[postId];
    const question = questions[quesId];
    // post.comments.push({ id, content, status });
    question.answers.push({id, status, content});
  }

  // if (type === "CommentUpdated") {
    if( type === 'AnswerUpdated') {
    // const { id, content, postId, status } = data;
    const {id, content, quesId, status} =data;

    // const post = posts[postId];
    const question = questions[quesId];
    // const comment = post.comments.find((comment) => {
      const answer = question.answers.fin((answer)=>{
        // return comment.id === id;
        return answer.id === id;

      });
  
    // comment.status = status;
    // comment.content = content;
    answer.status = status;
    answer.content = content;
  }
};


app.get("/questions",(req,res)=>{
  res.send(questions);
});

app.post("/events",(req,res) =>{
  const {type, data } =req.body;
  handleEvent(type,data);
  res.send({});
});


app.listen(4002, async () => {
  console.log("Listening to port 4002");
  try{
      const res=await axios.get("http://localhost:4005/events");

      for(let event of res.data) {
        handleEvent(event.type, event.data);
      }

  }catch(error){
    console.log(error.message);
  }
});