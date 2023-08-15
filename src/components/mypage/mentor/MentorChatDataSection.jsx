import React from "react";
import MentorChatHistory from "./MentorChatHistory";

const MentorChatDataSection = ({ data }) => {
  return (
    <>
      {data &&
        data.map((history, i) => {
          if (history.status === 1) {
            return <MentorChatHistory key={history.id} history={history} />;
          }
          return null;
        })}
    </>
  );
};

export default MentorChatDataSection;
