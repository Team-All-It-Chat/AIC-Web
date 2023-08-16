import React from "react";
import ApplyChat from "./ApplyChat";

const ApplyChatDataSection = ({ data }) => {
  const reverseData = data.slice().reverse();

  return (
    <>
      {reverseData &&
        reverseData.map((database) => {
          if (database.status === 0) {
            return <ApplyChat key={database.id} database={database} />;
          }
          return null;
        })}
    </>
  );
};

export default ApplyChatDataSection;
