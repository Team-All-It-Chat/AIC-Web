import React, { useRef, useEffect } from "react";
import { styled, keyframes } from "styled-components";

const MainSection = () => {
  const wrapperRef = useRef(null); // Ref for the Wrapper element

  useEffect(() => {
    const observerIn = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        } else {
          entry.target.style.opacity = 0;
        }
      });
    });

    const currentWrapper = wrapperRef.current;

    if (currentWrapper) {
      observerIn.observe(currentWrapper);
    }

    return () => {
      if (currentWrapper) {
        observerIn.unobserve(currentWrapper);
      }
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
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
  height: fit-content;
  background-color: #89cdf6;
  scroll-snap-align: center;
  opacity: 0;
  transition: opacity 2.5s ease-in-out;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: fit-content;
  flex-basis: 75rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background-image: linear-gradient(180deg, #89cdf6 80%, white 20%);
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
  background-color: linear-gradient(180deg, #89cdf6 0%, white 100%);
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
`;

const floatAnimation2 = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-16px);
  }
`;

const rotateAnimation = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(5deg);
  }
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const FloatingImage = styled.img`
  position: absolute;
`;

const Image1 = styled(FloatingImage)`
  // 뒷구름
  position: absolute;
  width: 100%;
  min-width: 40rem;
  height: 48%;
  margin-bottom: 2%;
  bottom: 0;
  animation: ${floatAnimation} 3.5s infinite;
`;

const Image2 = styled(FloatingImage)`
  // 비행기
  position: absolute;
  width: 50vw;
  min-width: 50rem;
  right: 7rem;
  top: 5rem;
  margin-top: 6%;
  margin-left: 48%;
  animation: ${rotateAnimation} 4s infinite;
`;

const Image3 = styled(FloatingImage)`
  // 오리
  position: absolute;
  right: 15rem;
  width: 31vw;
  min-width: 35rem;
  margin-bottom: 2%;
  bottom: 0;
  animation: ${bounceAnimation} 2s infinite;
`;

const Image4 = styled(FloatingImage)`
  // 앞구름
  position: absolute;
  width: 100%;
  min-width: 40rem;
  bottom: 0;
  animation: ${floatAnimation2} 2.5s infinite;
`;

const Image5 = styled(FloatingImage)`
  // 로고
  position: absolute;
  width: 28%;
  left: 12vw;
  top: 9rem;
  margin-top: 10%;
  padding-bottom: 10%;
  min-width: 25rem;
  animation: ${rotateAnimation} 5s infinite;
`;
