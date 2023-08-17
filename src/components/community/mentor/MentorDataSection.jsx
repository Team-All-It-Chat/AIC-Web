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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  padding: initial;
  height: fit-content;
`;
