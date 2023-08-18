import React from "react";
import MentorCard from "./MentorCard";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

const MentorDataSection = ({ mentorDataList }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryStringValue = searchParams.get("search");

  if (queryStringValue !== null) {
    console.log("검색어:", queryStringValue);
    const mentorPost = mentorDataList.filter(
      (mentor) => mentor.contry === queryStringValue
    );
    if (mentorPost.length !== 0) {
      return (
        <CardWrapper>
          {mentorPost &&
            mentorPost.map((mentor, i) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
        </CardWrapper>
      );
    } else {
      alert("검색결과가 없습니다!");
      return (
        <CardWrapper>
          {mentorDataList &&
            mentorDataList.map((mentor, i) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
        </CardWrapper>
      );
    }
  } else {
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
  }
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
