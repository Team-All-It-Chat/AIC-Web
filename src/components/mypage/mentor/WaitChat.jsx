import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const WaitChat = () => {
  const navigate = useNavigate();
  return (
    <>
      <List>
        <ProfileSection>
          <ProfileCircle>
            <ProfileImg src="/img/minicloud_ori.png" />
          </ProfileCircle>
          오동잎
        </ProfileSection>
        <ChatTitle onClick={() => navigate(`/applyAlert`)}>
          00대학교로 교환학생을 가신 구체적인 이유가 궁금합니다!{" "}
        </ChatTitle>
        <BtnWrapper>
          <AcceptBtn onClick={() => navigate(`/applyAlert`)}>답변</AcceptBtn>
          <RejectBtn>거절</RejectBtn>
        </BtnWrapper>
      </List>
    </>
  );
};

export default WaitChat;

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

const AcceptBtn = styled.div`
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

const RejectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 45px;
  border-radius: 25.748px;
  background: var(--light-gray, #dadada);
  cursor: pointer;
  @media (max-width: 900px) {
    width: 40px;
    height: 30px;
  }
`;
