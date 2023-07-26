import React,{useState} from "react";
import axios from "axios";

const QuestionCreate = () => {
    const [question, setQuestion]=useState<string>("");
    const [id, setId]=useState<number>(0);
    
  const onSubmit =async (event: React.FormEvent<HTMLFormElement>) => {
     await axios.post<string>("http://localhost:4000/questions",{question,});
     setQuestion("");
  };

return(
  <div>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Interview Questions</label>
        <input  
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="form-control"
          />
      </div>
      </form>
  </div>
  );
};
export default QuestionCreate;
