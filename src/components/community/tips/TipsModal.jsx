import React from 'react'
import TipCard from './TipCard';
import { styled } from 'styled-components';

const TipsModal = () => {
  return (
    <Wrapper>
    <Title>오리챗 멘토의 생생한 이야기를 들어보덕!</Title>
    <CardWrapper>
      <TipCard/>
      <TipCard/>
      <TipCard/>
      <TipCard/>
      <TipCard/>
      <TipCard/>
      <TipCard/>
    </CardWrapper>
  </Wrapper>
  )
}

export default TipsModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`

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
