import React, {useState,useEffect,FC} from "react";
import axios from "axios";
import {IAnswer} from './AnswerInterface';
import AnswerList from './AnswerList';
import AnswerCreate from  './AnswerCreate';


export type QuestionListProps  = {
  id:number
  detail: string
  answers: IAnswer[]  
};

const QuestionList: FC<QuestionListProps> = (props:QuestionListProps) => {
  const [quesList,setQuesList]=useState<QuestionListProps[]>([]);

  const fetchQuesList = async () => {
    const res =await axios.get<QuestionListProps[]>("http://localhost:4002/questions");
    
    setQuesList(res.data);
  };
 

  useEffect( () => {
    fetchQuesList();
  },[]);
  const renderedQuestions = Object.values(quesList).map( (ques)=>{
    return(
      <div className="card" style={{width: "30%", marginBottom: "20%"}} key={ques.id}>

        <div className="card-body">
          {/* <h3>{ques.question}</h3> */}
          <h3>{ques.detail}</h3>
          <AnswerCreate quesId={ques.id}/>
          <AnswerList answerList ={ques.answers}/>
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