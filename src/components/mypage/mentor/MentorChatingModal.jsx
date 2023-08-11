import React from "react";
import { styled } from "styled-components";
import WaitChat from "./WaitChat";
import MentorChatHistory from "./MentorChatHistory";

const MentorChatingModal = () => {
  const waitChatLength = 4;
  const chatHistoryLength = 7;
  return (
    <Wrapper>
      <SubWrapper>
        <Title>나의 답변을 기다리는 오리챗</Title>
        <WaitListSection>
          {Array.from({ length: waitChatLength }, (_, index) => (
            <>
              <WaitChat key={index} />
            </>
          ))}
        </WaitListSection>
      </SubWrapper>
      <SubWrapper>
        <Title>나의 오리챗 기록</Title>
        <HistoryListSection>
          {Array.from({ length: chatHistoryLength }, (_, index) => (
            <>
              <MentorChatHistory key={index} />
            </>
          ))}
        </HistoryListSection>
      </SubWrapper>
    </Wrapper>
  );
};

export default MentorChatingModal;

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
