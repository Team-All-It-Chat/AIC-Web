import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const MentorChatHistory = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/checkAnswer");
  };

  return (
    <>
      <List onClick={onClick}>
        <ProfileSection>
          <ProfileCircle>
            <ProfileImg src="/img/minicloud_ori.png" />
          </ProfileCircle>
          오뚱뚱
        </ProfileSection>
        <ChatTitle>00대학교에서 현지 재학생 분들을 만나기 쉬운가요?</ChatTitle>
        <Date>23/08/11 답변 완료</Date>
      </List>
    </>
  );
};

export default MentorChatHistory;

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
  justify-content: center;
  width: fit-content;
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
  @media (max-width: 900px) {
    height: 35px;
  }
`;

const ProfileImg = styled.img`
  width: 90%;
  height: 80%;
  object-fit: contain;
  border-radius: 50%;
  background-color: white;
`;

const ChatTitle = styled.div`
  width: 55%;
  font-size: 1.8rem;
  font-weight: 300;
  cursor: pointer;
  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
`;

const Date = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  width: fit-content;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;
