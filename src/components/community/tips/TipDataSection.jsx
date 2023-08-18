import React from "react";
import TipCard from "./TipCard";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

const TipDataSection = ({ tipDataList }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryStringValue = searchParams.get("search");

  // tipDataList 배열의 요소를 모두 일렬로 나열한 새로운 배열 생성
  const flattenedTipList = tipDataList.flat();
  // created_at을 기준으로 최신순으로 정렬
  const sortedTipList = flattenedTipList.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  if (queryStringValue !== null) {
    const tipList = sortedTipList.filter((tip) =>
      tip.title.includes(queryStringValue)
    );
    if (tipList.length !== 0) {
      return (
        <CardWrapper>
          {tipList.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </CardWrapper>
      );
    } else {
      alert("검색결과가 없습니다!");
      <CardWrapper>
        {sortedTipList.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </CardWrapper>;
    }
  } else {
    return (
      <CardWrapper>
        {sortedTipList.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </CardWrapper>
    );
  }

  return (
    <CardWrapper>
      {sortedTipList.map((tip) => (
        <TipCard key={tip.id} tip={tip} />
      ))}
    </CardWrapper>
  );
};

export default TipDataSection;

const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  padding: initial;
  height: fit-content;
`;
