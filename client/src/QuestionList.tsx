import React, {useState,useEffect} from "react";
import axios from "axios";
import {AnswerListProps} from './AnswerList';
import {AnswerCreateProps} from  './AnswerCreate';


type QuestionListProps  = {
  id:number
  ans_contents: string[]
  detail: string
  AnswerCreate: React.ComponentType<AnswerCreateProps>
  AnswerList: React.ComponentType<AnswerListProps>
  
};

export const QuestionList = ({AnswerCreate, AnswerList }: QuestionListProps) => {
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
          <AnswerList answerList ={ques.ans_contents}/>
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

// export default QuestionList;
// export default class MyContainer extends React.Component<Props, {}> {}