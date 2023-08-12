import React from 'react'
import { styled } from 'styled-components';

const ApplyChat = () => {
  return (
    <>
    <List>
      <ProfileSection>
        <ProfileCircle>
          <ProfileImg src="/img/china_cut_ori.png" />
        </ProfileCircle>
        오동동
      </ProfileSection>
      <ChatTitle>
        00대학교로 교환학생을 가신 구체적인 이유가 궁금합니다!{" "}
      </ChatTitle>
      <BtnWrapper>
        <QuestionState>답변 대기</QuestionState>
        <Btn>확인</Btn>
      </BtnWrapper>
    </List>
  </>
  )
}

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

const QuestionState= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 45px;
  color: var(--orange, #FFA946);
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
