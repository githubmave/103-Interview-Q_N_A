
import React,{FC} from "react";
import QuestionCreate from "./QuestionCreate";
import {QuestionList} from "./QuestionList";
// import {QuestionListProps} from './QuestionList';


const App: FC= () => {
  return (
    <div className="container">
      <h1>Ask Questions</h1>
      <QuestionCreate/>
      <hr />
      <h1>Questions</h1>
      <QuestionList />

    </div>
  );
};
export default App;