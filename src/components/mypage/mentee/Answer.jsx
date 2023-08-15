import React, { useEffect, useState } from "react";
import CommunityNavBar from "../../community/CommunityNavBar";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import ReadReview from "./ReadReview";
import AlertBack from "../../background/AlertBack";
import Goback from "../Goback";
import { getChat } from "../../../apis/chat";

// 멘티 오리챗 기록 확인 페이지
const Answer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

  const onClick = () => {
    navigate("/writeReview");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getChat(id);
      setData(response.data);
    };
    fetchData();
  }, [id]);

  if (!data) {
    return null;
  }

  const review = data.reviews === [] ? null : data.reviews;

  console.log(data);
  return (
    <>
      <CommunityNavBar />
      <Wrapper>
        <TitleWrapper>
          <Goback />
          <Title>오리챗 기록</Title>
        </TitleWrapper>
        <ApplyWrapper>
          <ProfileCircle>
            <ProfileImg src="/img/mentee_profile.png" />
          </ProfileCircle>
          <QuestionWrapper>
            <Name>{data.questioner}</Name>
            <Question>{data.question}</Question>
          </QuestionWrapper>
        </ApplyWrapper>
        <AnswerWrapper>
          <Wrapper2>
            <ProfileCircle>
              <ProfileImg src="/img/duck1.png" />
            </ProfileCircle>
            <MentorWrapper>
              <Name>{data.answerer}</Name>
              <Text>멘토님의 친절한 답변이덕!</Text>
            </MentorWrapper>
          </Wrapper2>
          <AnswerSection>{data.answer}</AnswerSection>
        </AnswerWrapper>
        {review[0].content === "" ? (
          <Btn onClick={onClick}>후기 남기러 가기!</Btn>
        ) : (
          <ReadReview content={review[0].content} rate={review[0].rate} />
        )}
        <AlertBack />
      </Wrapper>
    </>
  );
};

export default Answer;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin-right: 3rem;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: 300;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: var(--dark-gray, #585858);
  width: 55%;
`;

const Btn = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5%;
  min-width: 60%;
  min-height: 52px;
  background-color: #ffd5d5;
  color: black;
  border-radius: 30px;
  background: linear-gradient(180deg, #c5e9ff 0%, #89cdf6 100%);
  font-size: 2.3rem;
  font-weight: 580;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
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
  height: fit-content;
  min-height: 100px;
  overflow-y: scroll;
  border: 3px solid var(--m-skyblue, #89cdf6);
  border-radius: 30px;
  padding: 30px;
  background-color: white;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 3%;
  margin: 10px 0px;
`;

const MentorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  min-height: 60px;
`;

const AnswerWrapper = styled.div`
  margin-top: 1%;
  width: 55%;
  min-width: 500px;
  height: fit-content;
  min-height: 300px;
  border: 3px solid #89cdf6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  padding: 13px 13px;
  background-color: white;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
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
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 130%;
`;
