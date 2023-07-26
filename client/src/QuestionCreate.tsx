import React,{useState} from "react";
import axios from "axios";

const QuestionCreate = () => {
    const [detail, setDetail]=useState<string>("");
    
  const onSubmit =async (event: React.FormEvent<HTMLFormElement>) => {
    //  event.preventDefault();

    await axios.post<string>("http://localhost:4000/questions",{detail,});
    // await axios.post("http://localhost:4000/questions",{detail,});
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
