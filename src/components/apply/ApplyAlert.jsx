import React, { useState, useEffect } from "react";
import CommunityNavBar from "../community/CommunityNavBar";
import { styled } from "styled-components";
// import { useNavigate } from "react-router-dom";
import ChatModal from "../common/ChatModal";
import AlertBack from "../background/AlertBack";
import { useParams } from "react-router-dom";
import { getChat } from "../../apis/chat";
import { useRecoilValue } from "recoil";
import { mentorImgAtom } from "../../recoil/atoms";
import Goback from "../mypage/Goback";

// 오리챗 신청이 들어왔어요! 페이지
const ApplyAlert = () => {
  const [modal, setModal] = useState(false);
  const myImg = useRecoilValue(mentorImgAtom);
  const { id } = useParams();

  const [data, setData] = useState();

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

  const onClick = () => {
    const confirmed = window.confirm("전송하시겠습니까?");
    if (confirmed) {
      setModal(true);
    }
  };

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
            <Name>멘티둥</Name>
            <Question>{data.question}</Question>
          </QuestionWrapper>
        </ApplyWrapper>
        <AnswerWrapper>
          <Wrapper2>
            <ProfileCircle>
              <ProfileImg src={myImg} />
            </ProfileCircle>
            <MentorWrapper>
              <Name>최재영</Name>
              <Text>친절한 답변 부탁드린덕!</Text>
            </MentorWrapper>
          </Wrapper2>
          <AnswerSection placeholder="답변을 작성해덕!"></AnswerSection>
          <Btn onClick={onClick}>멘티에게 답변 보내기</Btn>
        </AnswerWrapper>
        <AlertBack />
        {modal && <ChatModal isMentor={false} name={"답변 전송"} />}
      </Wrapper>
    </>
  );
};

export default ApplyAlert;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-right: 3rem;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  width: 65%;
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

const AnswerSection = styled.textarea`
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
  resize: none;
  line-height: 1.5;
  overflow: auto;
  outline: none;
  font-family: "Times New Roman";
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
