import React from "react";
import { styled } from "styled-components";

const MainSection = () => {
  return (
    <Wrapper>
      <MainWrapper>
        <ImageWrapper>
          <Image1 src="img/cloudback.png" />
          <Image2 src="img/airplane.png" />
          <Image3 src="img/mainduck.png" />
          <Image4 src="img/cloud.png" />
          <Image5 src="img/mainlogo.png" />
        </ImageWrapper>
      </MainWrapper>
    </Wrapper>
  );
};

export default MainSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  background-color: #89cdf6;
`;

const MainWrapper = styled.div`
  width: 100%;
  flex-basis: 75rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background-color: #89cdf6;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50%;
  overflow: hidden;
`;

const Image1 = styled.img`
  // 뒷구름
  position: absolute;
  width: 100%;
  min-width: 40rem;
  height: 48%;
  margin-bottom: 2%;
  bottom: 0;
`;

const Image2 = styled.img`
  // 비행기
  position: absolute;
  width: 50vw;
  min-width: 50rem;
  right: 7rem;
  top: 5rem;
  margin-top: 6%;
  margin-left: 48%;
`;

const Image3 = styled.img`
  // 오리
  position: absolute;
  right: 15rem;
  width: 31vw;
  min-width: 35rem;
  margin-bottom: 2%;
  bottom: 0;
`;

const Image4 = styled.img`
  // 앞구름
  position: absolute;
  width: 100%;
  min-width: 40rem;
  bottom: 0;
`;

const Image5 = styled.img`
  // 로고
  position: absolute;
  width: 28%;
  left: 12vw;
  top: 9rem;
  margin-top: 10%;
  padding-bottom: 10%;
  min-width: 25rem;
`;
