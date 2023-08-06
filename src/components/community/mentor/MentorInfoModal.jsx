import React from "react";
import MentorCard from "./MentorCard";
import { styled } from "styled-components";

const MentorInfoModal = () => {
  return (
    <Wrapper>
      <Title>오리챗 멘토를 찾아보덕!</Title>
      <CardWrapper>
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </CardWrapper>
    </Wrapper>
  );
};

export default MentorInfoModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`

const Title = styled.div`
  font-size: 2.7rem;
  font-weight: 500;
  text-align: start;
  width: 100%;
  margin-bottom: 3%;
`;

const CardWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2%;
  height: fit-content;
  margin-bottom: 50px;
`;
