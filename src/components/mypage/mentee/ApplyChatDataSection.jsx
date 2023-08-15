import React from "react";
import ApplyChat from "./ApplyChat";

const ApplyChatDataSection = ({ data }) => {
  return (
    <>
      {data &&
        data.map((database) => {
          if (database.status === 0) {
            return <ApplyChat ket={database.id} database={database} />;
          }
          return console.log(database);
        })}
    </>
  );
};

export default ApplyChatDataSection;
