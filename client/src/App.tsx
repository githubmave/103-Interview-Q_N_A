
import React from "react";
import QuestionCreate from "./QuestionCreate";
import QuestionList from "./QuestionList";

const App = () => {
  return (
    <div className="container">
      <h1>Ask Questions</h1>
      <QuestionCreate/>
      <hr />
      <h1>Questions</h1>
      <QuestionList/>
    </div>
  );
};
export default App;