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
          a lil spot Just sit and talk Looking pretty Follow me 우리 둘이 나란히
          보이지? (봐) 내 눈이 (heh) 갑자기 빛나지 When you say I’m your dream
          You don’t even know my name Do ya? You don’t even know my name Do
          ya-a? 누구보다도
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
  height: 100%;
  background-color: white;
  z-index: 1;
`;

const IntroduceWrapper = styled.div`
  width: 80%;
  flex-basis: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #ffffff;
  margin-bottom: 10%;
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
