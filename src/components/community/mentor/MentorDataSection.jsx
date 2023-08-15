import React from "react";
import MentorCard from "./MentorCard";
import { styled } from "styled-components";

const MentorDataSection = ({ mentorDataList }) => {
  return (
    <CardWrapper>
      {mentorDataList &&
        mentorDataList.map((mentor, i) => (
          <MentorCard
            key={mentor.id}
            mentor={mentorDataList[mentorDataList.length - 1 - i]}
          />
        ))}
    </CardWrapper>
  );
};

export default MentorDataSection;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: fit-content;
  margin-bottom: 50px;
  gap: 2%;
`;