import React from "react";
import WaitChat from "./WaitChat";

const WaitChatDataSection = ({ data }) => {
  const reverseData = data.slice().reverse();

  return (
    <>
      {reverseData &&
        reverseData.map((database, i) => {
          if (database.status === 0) {
            return <WaitChat key={database.id} database={database} />;
          }
          return null;
        })}
    </>
  );
};

export default WaitChatDataSection;
