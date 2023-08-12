import React from "react";
import ApplyChat from "./ApplyChat";
import MenteeChatHistory from "./MenteeChatHistory";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const MenteeChatingModal = () => {
  const applyChatLength = 4;
  const chatHistoryLength = 7;
  const navigate = useNavigate("");

  const onClick = () => {
    navigate("/readAnswer");
  };
  return (
    <Wrapper>
      <SubWrapper>
        <Title>나의 오리챗 신청 현황</Title>
        <WaitListSection>
          {Array.from({ length: applyChatLength }, (_, index) => (
            <>
              <ApplyChat key={index} />
            </>
          ))}
        </WaitListSection>
      </SubWrapper>
      <SubWrapper>
        <Title>나의 오리챗 기록</Title>
        <HistoryListSection>
          {Array.from({ length: chatHistoryLength }, (_, index) => (
            <>
              <MenteeChatHistory key={index} onClick={onClick} />
            </>
          ))}
        </HistoryListSection>
      </SubWrapper>
    </Wrapper>
  );
};

export default MenteeChatingModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 3%;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 400;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const WaitListSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  max-height: 200px;
  margin-top: 2%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const HistoryListSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  max-height: 300px;
  margin-top: 2%;
  overflow-x: hidden;
  overflow-y: scroll;
`;
