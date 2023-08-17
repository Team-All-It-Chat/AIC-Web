import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import TipDataSection from "./TipDataSection";
import { useParams } from "react-router-dom";
import { getPostsOfContinent } from "../../../apis/posts";

const TipsModal = () => {
  const { continent } = useParams();
  const [tipDataList, setTipList] = useState([]);

  // 렌더 전 데이터 패칭을 위한 useEffect
  useEffect(() => {
    const fetchData = async () => {
      const response = await getPostsOfContinent(continent);
      setTipList(response.data.result);
      console.log(response.data.result);
    };
    fetchData();
  }, [continent]);

  return (
    <Wrapper>
      <Title>오리챗 멘토의 생생한 이야기를 들어보덕!</Title>
      <TipDataSection tipDataList={tipDataList} />
    </Wrapper>
  );
};

export default TipsModal;

const Wrapper = styled.div`
  width: 100%;
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
