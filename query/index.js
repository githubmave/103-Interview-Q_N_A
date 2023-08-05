const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const questions = {};

const handleEvent = (type, data) => {
    if( type === 'QuestionCreated'){
    const {id, detail} = data;

    questions[id] = {id, detail, answers:[]};
    }
    if ( type === 'AnswerCraeted') {
    const { id, content, quesId, status } = data;

    const question = questions[quesId];
    question.answers.push({id, status, content});
  }

    if( type === 'AnswerUpdated') {
    const {id, content, quesId, status} =data;

    const question = questions[quesId];
      const answer = question.answers.fin((answer)=>{
        return answer.id === id;

      });
  
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