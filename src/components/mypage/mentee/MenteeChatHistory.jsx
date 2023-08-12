import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const MenteeChatHistory = () => {
  const navigate = useNavigate();
  return (
    <>
      <List>
        <ProfileSection>
          <ProfileCircle>
            <ProfileImg src="/img/china_cut_ori.png" />
          </ProfileCircle>
          멘토덕
        </ProfileSection>
        <ChatTitle onClick={() => navigate(`/readAnswer`)}>
          00대학교에서 적응할 때 제일 힘들었던 점은 무엇인가요?{" "}
        </ChatTitle>
        <Date>23/08/11 답변 완료</Date>
      </List>
    </>
  );
};

export default MenteeChatHistory;

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
  @media (max-width: 900px) {
    height: 35px;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
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
