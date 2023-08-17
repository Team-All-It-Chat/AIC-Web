import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import QuestionModal from "./QuestionModal";

const ApplyChat = ({ database }) => {
  const [modal, setModal] = useState(false);

  const title =
    database.question.length > 50
      ? database.question.substring(0, 50) + "..."
      : database.question;

  const statusText = (status) => {
    if (status === 0) {
      return "답변 대기";
    } else if (status === 2) {
      return "거절";
    }
    // 다른 status 값에 대한 처리도 추가할 수 있음
    return ""; // default 값
  };

  const state = database.status;

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <List>
        <ProfileSection>
          <ProfileCircle>
            <ProfileImg src={`/img/duck${database.answerer.profile}.png`} />
          </ProfileCircle>
          {database.answerer.name}
        </ProfileSection>
        <ChatTitle>{title}</ChatTitle>
        <BtnWrapper>
          <QuestionState status={state}>{statusText(state)}</QuestionState>
          <Btn onClick={openModal}>확인</Btn>
        </BtnWrapper>
      </List>
      {modal && <QuestionModal database={database} closeModal={closeModal} />}
    </>
  );
};

export default ApplyChat;

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: solid 1px #dadada;
  padding-bottom: 0.5%;
  margin-top: 1%;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: fit-content;
  min-width: 150px;
  gap: 10px;
  font-size: 2rem;
  font-weight: 600;
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const ProfileCircle = styled.div`
  height: 50px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media (max-width: 900px) {
    width: 35px;
    height: 35px;
  }
`;

const ProfileImg = styled.img`
  width: 90%;
  height: 80%;
  object-fit: contain;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
`;

const ChatTitle = styled.div`
  width: 60%;
  font-size: 1.8rem;
  font-weight: 300;
  text-align: start;
  @media (max-width: 900px) {
    font-size: 1.3rem;
    width: 400px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
  font-size: 1.7rem;
  width: fit-content;
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

const QuestionState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 45px;
  ${(props) =>
    props.status === 0
      ? `
      color: var(--orange, #ffa946);    `
      : props.status === 2
      ? `
      color: var(--red, #d01515);
    `
      : ""};
  @media (max-width: 900px) {
    width: 75px;
    height: 30px;
  }
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 45px;
  border-radius: 25.748px;
  background: var(--m-skyblue, #89cdf6);
  cursor: pointer;
  @media (max-width: 900px) {
    width: 40px;
    height: 30px;
  }
`;
