import React, { useState } from "react";
import axios from "axios";
// import {quesType} from './QuestionList';

export type AnswerCreateProps = {
   quesId: number
  //  ans_cotent: string
}

export const AnswerCreate = (props: AnswerCreateProps) => {
  const [content, setContent] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${quesId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Candidate Answer</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AnswerCreate;s
