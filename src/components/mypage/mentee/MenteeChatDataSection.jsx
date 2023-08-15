import React from "react";
import MenteeChatHistory from "./MenteeChatHistory";

const MenteeChatDataSection = ({ data }) => {
  const filteredHistory = data.filter((history) => history.status === 1);
  const reversedFilteredHistory = filteredHistory.slice().reverse();

  return (
    <>
      {reversedFilteredHistory.map((history) => (
        <MenteeChatHistory key={history.id} history={history} />
      ))}
    </>
  );
};

export default MenteeChatDataSection;
