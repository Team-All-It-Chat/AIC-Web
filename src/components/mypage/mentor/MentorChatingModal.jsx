import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getAllChat } from "../../../apis/chat";
import MentorChatDataSection from "./MentorChatDataSection";
import WaitChatDataSection from "./WaitChatDataSection";

const MentorChatingModal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllChat();
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <SubWrapper>
        <Title>나의 답변을 기다리는 오리챗</Title>
        <WaitListSection>
          <WaitChatDataSection data={data} />
        </WaitListSection>
      </SubWrapper>
      <SubWrapper>
        <Title>나의 오리챗 기록</Title>
        <HistoryListSection>
          <MentorChatDataSection data={data} />
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
  overflow: auto; /* 내용이 넘칠 경우 스크롤 생성 */
`;

const HistoryListSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  max-height: 300px;
  margin-top: 2%;
  overflow: auto; /* 내용이 넘칠 경우 스크롤 생성 */
  /* overflow-x: hidden; */
  /* overflow-y: scroll; */
`;
