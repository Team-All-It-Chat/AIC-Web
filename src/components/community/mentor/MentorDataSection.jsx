import React from "react";
import MentorCard from "./MentorCard";

const MentorDataSection = ({ mentorDataList }) => {
  return (
    <>
      {mentorDataList &&
        mentorDataList.map((mentor, i) => (
          <MentorCard
            key={mentor.id}
            mentor={mentorDataList[mentorDataList.length - 1 - i]}
          />
        ))}
      ;
    </>
  );
};

export default MentorDataSection;
