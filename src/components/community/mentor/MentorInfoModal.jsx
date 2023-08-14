import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getMentorProfiles } from "../../../apis/accounts";
import { useParams } from "react-router-dom";
import MentorDataSection from "./MentorDataSection";

const MentorInfoModal = () => {
  const { continent } = useParams();
  const [mentorDataList, setMentorList] = useState([]);

  // 렌더 전 데이터 패칭을 위한 useEffect
  useEffect(() => {
    const fetchData = async () => {
      // console.log(continent);
      const response = await getMentorProfiles(continent);
      setMentorList(response.data.result);
      console.log(response.data.result);
    };
    fetchData();
  }, [continent]);

  return (
    <Wrapper>
      <Title>오리챗 멘토를 찾아보덕!</Title>
      <CardWrapper>
        <MentorDataSection mentorDataList={mentorDataList} />
      </CardWrapper>
    </Wrapper>
  );
};

export default MentorInfoModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`;

const Title = styled.div`
  font-size: 2.7rem;
  font-weight: 500;
  text-align: start;
  width: 100%;
  margin-bottom: 3%;
`;

const CardWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2%;
  height: fit-content;
  margin-bottom: 50px;
`;
