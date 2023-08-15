import React from 'react'
import TipCard from './TipCard';
import { styled } from 'styled-components';

const TipDataSection = ({tipDataList}) => {
  return (
    <CardWrapper>
    {tipDataList &&
      tipDataList.map((tip, i) => (
        <TipCard
          key={tip.id}
          tip={(tipDataList[tipDataList.length - 1 - i])[0]}
        />
      ))}
  </CardWrapper>
  )
}

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