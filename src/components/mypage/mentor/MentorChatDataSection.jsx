import React from "react";
import MentorChatHistory from "./MentorChatHistory";

const MentorChatDataSection = ({ data }) => {
  const filteredHistory = data.filter((history) => history.status === 1);
  const reversedFilteredHistory = filteredHistory.slice().reverse();

  return (
    <>
      {reversedFilteredHistory.map((history) => (
        <MentorChatHistory key={history.id} history={history} />
      ))}
    </>
  );
};

export default MentorChatDataSection;
