import React, { useState, useEffect } from "react";
import ApplyChatDataSection from "./ApplyChatDataSection";
import MenteeChatDataSection from "./MenteeChatDataSection";
import { styled } from "styled-components";
// import { useNavigate } from "react-router-dom";
import useAllChat from "../../../hooks/useAllChat";
import { getAllChat } from "../../../apis/chat";

const MenteeChatingModal = () => {
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
        <Title>나의 오리챗 신청 현황</Title>
        <WaitListSection>
          <ApplyChatDataSection data={data} />
        </WaitListSection>
      </SubWrapper>
      <SubWrapper>
        <Title>나의 오리챗 기록</Title>
        <HistoryListSection>
          <MenteeChatDataSection data={data} />
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
