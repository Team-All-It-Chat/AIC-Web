import React, { useRef, useEffect } from "react";
import { styled } from "styled-components";

const IntroduceSection = () => {
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
      <IntroduceWrapper>
        <Title>서비스 소개</Title>
        <Text>
          내가 찾던 멘토가 여기에!!
          <br />
          누가 원하는 정보를 얻을 수 있는 전세계 교환학생 매칭 플랫폼
          <br />
          오리챗(All-it-Chat)
        </Text>
        <TextForm>
          <TextFormTitle>
            오리챗이란?
            <br />
            교환학생을 준비하는 모든 대학생이 원하는 멘토에게 궁금한 점을 질문할
            수 있는 서비스
          </TextFormTitle>
          <TextFormContent>
            <li>
              한국 학교가 아닌 파견교를 기준으로 한 정보제공으로 더욱 많은
              멘토에게 질문 가능
            </li>
            <li>멘토에게 1:1로 질문할 수 있어 부담없이 솔직하게</li>
            <li>
              현지 정보는 실시간으로, 교환 후 챙겨야 하는 부분은 빠짐없이 체크할
              수 있는 멘토들의 꿀팁 공유
            </li>
          </TextFormContent>
        </TextForm>
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
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
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
  width: 100%;
  margin-top: 5%;
  color: #454545;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

const Text = styled.div`
  text-align: center;
  width: 100%;
  color: #454545;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 5rem;
  margin-top: 2%;
  margin-bottom: 3%;
`;

const TextForm = styled.div`
  border: 3px solid skyblue;
  border-radius: 20px;
  padding: 20px;
  width: 65%;
  /* width: 700px; */
  min-width: 700px;
  height: 190px;
`;

const TextFormTitle = styled.div`
  font-size: 20px;
  margin-left: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
  font-weight: bold;
  color: #454545;
`;

const TextFormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  font-size: 18px;
  padding: 15px 20px;
  color: gray;
`;
