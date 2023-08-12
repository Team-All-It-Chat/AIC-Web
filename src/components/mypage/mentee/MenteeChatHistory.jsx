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
        <ChatTitle>
          00대학교에서 적응할 때 제일 힘들었던 점은 무엇인가요?{" "}
        </ChatTitle>
        <BtnWrapper>
          <Date>23/08/11 답변 완료</Date>
          <Btn onClick={() => navigate(`/readAnswer`)}>답변 보기</Btn>
        </BtnWrapper>
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
  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3%;
  width: 22%;
`;

const Date = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  width: fit-content;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  width: 90px;
  height: 45px;
  border-radius: 25.748px;
  background: var(--m-skyblue, #89cdf6);
  cursor: pointer;
  @media (max-width: 900px) {
    font-size: 1.2rem;
    width: 75px;
    height: 30px;
  }
`;
