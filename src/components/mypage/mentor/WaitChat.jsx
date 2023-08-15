import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const WaitChat = ({ database }) => {
  const navigate = useNavigate();

  const title =
    database.question.length > 40
      ? database.question.substring(0, 40) + "..."
      : database.question;

  const onClick = () => {
    navigate(`/applyAlert/${database.id}`);
  };
  return (
    <>
      <List onClick={onClick}>
        <ProfileSection>
          <ProfileCircle>
            <ProfileImg src="/img/mentee_profile.png" />
          </ProfileCircle>
          멘티동
        </ProfileSection>
        <ChatTitle>{title}</ChatTitle>
        <BtnWrapper>
          <AcceptBtn>답변</AcceptBtn>
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
