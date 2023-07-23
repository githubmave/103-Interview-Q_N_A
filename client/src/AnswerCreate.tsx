import react ,{useState} from 'react';
import axios  from 'axios';


const AnswerCreate = ({quesId}) => {
  const [answer,setAnswer]=useState<string>("");
  const [candidate,setCandidate]=useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
    await axios.post<string>(`http://localhost:4001/questions/${quesId}/answers`,{answer,candidate,});
    setAnswer("");
    setCandidate("");
  };
  return(
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Answers</label>
          <input className="form-control" value={answer} onChange={ (e)=>setAnswer(e.target.value)}>
          </input>
          <label>Candidate</label>
          <input className='form-control' value={candidate} onChange={(e) => setCandidate(e.target.value)}>
          </input>
          <button className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>

  

  );
};

export default AnswerCreate;