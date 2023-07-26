import React, {useState,useEffect} from "react";
import axios from "axios";
import AnswerCreate from "./AnswerCreate";

interface quesType {
  id:number;
  question: string;
  answer:string;
};
const QuestionList = () => {
  const [quesList,setQuesList]=useState<quesType[]>([]);

  const fetchQuesList = async () => {
      const res =await axios.get<quesType[]>("http://localhost:4002/questions");
    // const res =await axios.get<quesType[]>("http://localhost:4000/questions");
    setQuesList(res.data);
  };

  useEffect( () => {
    fetchQuesList();
  },[]);


  const renderedQuestions =quesList.map( (ques)=>{
    return(
      <div className="card" style={{width: "30%", marginBottom: "20%"}} key={ques.id}>
        <div className="card-body">
          <h3>{ques.question}</h3>
          <AnswerCreate quesId={ques.id}/>
          {/* <AnswerList answers={ques.} /> */}
        </div>
      </div>

    );  
  });


  return(
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedQuestions}
    </div>
  );

};



export default QuestionList;