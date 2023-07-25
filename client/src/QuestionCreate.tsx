import React,{useState} from "react";
import axios from "axios";

// interface quesType {
//   id: number;
//   question: string;
// };

const QuestionCreate = () => {
    const [detail, setDetail]=useState<string>("");
    // const [id, setId]=useState<number>(0);
    
  const onSubmit =async (event: React.FormEvent<HTMLFormElement>) => {
     await axios.post<string>("http://localhost:4000/questions",{detail,});
                // .then((response)=>{})
     setDetail("");
  };

return(
  <div>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Detail:</label>
        <input  
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="form-control"
          />
      </div>
      <button className="btn btn-primary">Submit</button>
      </form>
  </div>
  );
};
export default QuestionCreate;
