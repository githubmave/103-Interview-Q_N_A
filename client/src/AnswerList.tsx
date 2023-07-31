 import React, {FC} from "react";
 import {IAnswer} from './AnswerInterface';

export type AnswerListProps = {
  answerList: IAnswer[]

}

export const AnswerList: FC<AnswerListProps> = ({answerList}: AnswerListProps): JSX.Element => {
  const renderedComments = answerList.map((answer) => {
    let content;

    if (answer.status === "approved") {
      content = answer.content;
    }

    if (answer.status === "pending") {
      content = "This comment is awaiting moderation";
    }

    if (answer.status === "rejected") {
      content = "This comment has been rejected";
    }

    return <li key={answer.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default AnswerList;
