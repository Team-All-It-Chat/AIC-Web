import React from "react";
import { styled } from "styled-components";

const IntroduceSection = () => {
  return (
    <Wrapper>
      <IntroduceWrapper>
        <Title>서비스 소개</Title>
        <Text>
          오리챗(ALL-IT Chat)은 ~~...(내용은 아직입니당)I’m super shy, super shy
          But wait a minute while I Make you mine, make you mine 떨리는 지금도
          You’re on my mind All the time I wanna tell you but I’m Super shy,
          super shy And I wanna go out with you Where you wanna go? (Huh?) Find
          a lil spot Just sit and
        </Text>
      </IntroduceWrapper>
    </Wrapper>
  );
};

export default IntroduceSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 101vh;
  height: fit-content;
  background-color: #ffffff;
  scroll-snap-align: start;
`;

const IntroduceWrapper = styled.div`
  width: 80%;
  flex-basis: 80%;
  height: fit-content;
  min-height: 730px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #ffffff;
  margin-bottom: 4%;
`;

const Title = styled.div`
  width: 95%;
  margin-top: 5%;
  color: #454545;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Text = styled.div`
  width: 95%;
  color: #454545;
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 5rem;
  margin-top: 3%;
`;
