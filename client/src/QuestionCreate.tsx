import React,{useState} from "react";
import axios from "axios";
// import  axiosInstance from "./axiosConfig";

// interface quesType {
//   id: number;
//   question: string;
// };

const QuestionCreate = () => {
    const [detail, setDetail]=useState<string>("");
    // const [id, setId]=useState<number>(0);
    
  const onSubmit =async (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();

     const instance = axios.create(
      {
          baseURL:"http://localhost:4000",
          withCredentials:false,
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
      });

    await instance.post<string>("/questions",{detail,}).catch((error)=>{console.log(error.message);
    });

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
