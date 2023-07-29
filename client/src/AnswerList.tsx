import React from "react";
// import {quesType} from './QuestionList';


export type AnswerListProps = {
  // quesId: number;
  answerList: string[];
  // ans_content: string;

}

export const AnswerList = ({ quesId,answerList,ans_content}: AnswerListProps) => {
  const renderedComments = ans_contents.map((ans_content) => {
    let ans_content;

    if (ans_content.status === "approved") {
      content = ans_content.content;
    }

    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

// export default AnswerList;
