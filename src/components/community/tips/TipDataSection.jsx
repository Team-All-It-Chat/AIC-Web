import React from 'react'
import TipCard from './TipCard';
import { styled } from 'styled-components';

const TipDataSection = ({ tipDataList }) => {
  // tipDataList 배열의 요소를 모두 일렬로 나열한 새로운 배열 생성
  const flattenedTipList = tipDataList.flat();

  // created_at을 기준으로 최신순으로 정렬
  const sortedTipList = flattenedTipList.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: fit-content;
  margin-bottom: 50px;
  gap: 2%;
`;