import React from "react";
import CommunityNavBar from "../community/CommunityNavBar";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import AlertBack2 from "../background/AlertBack2";

// 오리챗 답변이이 도착했어요! 페이지
const AnswerAlert = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/writeReview");
  };

  return (
    <>
      <CommunityNavBar />
      <Wrapper>
        <Title>오리챗 답변이 도착했어요!</Title>
        <ApplyWrapper>
          <ProfileCircle src="/img/navprofile.png" />
          <QuestionWrapper>
            <Name>오동동</Name>
            <Question>
              안녕하세요 저는 오동동 살이 찐 오동동입니다.안녕하세요 저는 오동동
              살이 찐 오동동입니다.안녕하세요 저는 오동동 살이 찐
              오동동입니다.안녕하세요 저는 오동동 살이 찐 오동동입니다.
              안녕하세요 저는 오동동 살이 찐 오동동입니다.안녕하세요 저는 오동동
              살이 찐 오동동입니다.안녕하세요 저는 오동동 살이 찐 오동동입니다.
            </Question>
          </QuestionWrapper>
        </ApplyWrapper>
        <AnswerWrapper>
          <Wrapper2>
            <ProfileCircle>
              <ProfileImg src="/img/navprofile.png" />
            </ProfileCircle>
            <MentorWrapper>
              <Name>최재영</Name>
              <Text>멘토님의 친절한 답변이덕!</Text>
            </MentorWrapper>
          </Wrapper2>
          <AnswerSection>
            안녕하세요! 반가워요 오동동 님. 저는 말씀하신대로 00대학교 퀸카카카
            곰인집입니다. 저에게 오리챗을 신청해주셔서 감사합니다.제가
            00대학교에 오게 된 가장 큰 이유는 바로바로 00대학교에는 00
            프로그램이 있었기 때문입니다. 00 수업에 대해 더 설명해 드릴게요. 00
            프로그램은 교환학생 대상 프로그램으로, 교환학생 2명끼리 짝을 지은
            다음, 댄스 배틀을 하는 프로그램입니다. 댄스 배틀에서 이기면 다른
            짝에서 이긴 사람과 또 댄스배틀을 합니다. 토너먼트 식이죠. 하지만,
            중요한 것은 잘 추는게 승리하는 것이 아닙니다. 바로 “기선”입니다.
            기선을 제압하면 그냥 이기는 댄스배틀이죠. 이기는 꿀팁은 다양하지만,
            제가 제일 추천하는 방식은 공간을 활용한 춤을 추는 것입니다. 주변에
            어떤 물체가 있다면 적극 활용하세요. 그것을 통해 상대방의 눈빛이
            흔들린다면 당신은 승리하게 되는 거죠. 저는 그 프로그램을 통해 손쉽게
            퀸카가 될 수 있었습니다. 감사합니다. 또 오리챗 부탁드려요.
          </AnswerSection>
          <Btn onClick={onClick}>답변 후기 남기러 가기</Btn>
        </AnswerWrapper>
        <AlertBack2 />
      </Wrapper>
    </>
  );
};

export default AnswerAlert;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  width: 55%;
  font-size: 28px;
  font-weight: bold;
  color: var(--dark-gray, #585858);
  margin-bottom: 1rem;
`;

const Btn = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5%;
  min-width: 60%;
  min-height: 52px;
  bottom: 0;
  background-color: #ffd5d5;
  color: black;
  border-radius: 30px;
  background: linear-gradient(180deg, #c5e9ff 0%, #89cdf6 100%);
  font-size: 2.3rem;
  font-weight: 580;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const Wrapper2 = styled.div`
  display: flex;
  width: 90%;
  margin-right: 7%;
  margin-left: 5px;
`;

const AnswerSection = styled.div`
  width: 85%;
  height: 30%;
  overflow-y: scroll;
  border: 3px solid var(--m-skyblue, #89cdf6);
  border-radius: 30px;
  padding: 40px;
  background-color: white;
  font-size: 16px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 3%;
  margin: 10px 0px;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: 300;
`;

const MentorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  min-height: 60px;
  margin-left: 2.5%;
`;

const AnswerWrapper = styled.div`
  margin-top: 1%;
  width: 55%;
  min-width: 500px;
  height: fit-content;
  height: 500px;
  min-height: 430px;
  border: 3px solid #89cdf6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  padding: 15px 15px;
  background-color: white;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 5%;
`;

const Question = styled.div`
  font-size: 16px;
  font-weight: 400px;
  width: 100%;
  height: fit-content;
  border-radius: 10px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1%;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 10px;
`;

const ProfileCircle = styled.div`
  height: 80px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 3px solid #89cdf6;
  background-color: white;
  margin-right: 2%;
`;

const ApplyWrapper = styled.div`
  margin-top: 1%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 15px;
  border-radius: 20px;
  width: 55%;
  min-width: 500px;
  height: fit-content;
  background: var(--l-skyblue, #c5e5f6);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120%;
  margin-top: 3%;
`;
