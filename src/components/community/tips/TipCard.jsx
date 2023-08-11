import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const TipCard = ({ num }) => {
  const router = useNavigate();

  return (
    <Card onClick={() => router(`/viewPost/${num}`)}>
      <TopWrapper>{/* <ThumbnailImg src="/img/halfduck.png" /> */}</TopWrapper>
      <BottomWrapper>
        <Row>
          <Text1>(제목) 중국 퀸카카카카~</Text1>
          <Text2>by 닉네임</Text2>
        </Row>
        <Row>
          <Text3>
            (내용 미리보기) 퀸카~ 암 핫~ 마이
            붐앤부디스핫~스팟라잇~~~~~~~~~~~~~~~~~~~~~~~~~...
          </Text3>
        </Row>
        <Row>
          <Text4>2023년 09월 11일</Text4>
          <CategoryRow>
            <Category>생활</Category>
            <Category>의사소통</Category>
          </CategoryRow>
        </Row>
      </BottomWrapper>
    </Card>
  );
};

export default TipCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 300px;
  height: 260px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 2%;
  cursor: pointer;
`;

// const ThumbnailImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

const TopWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8%;
  border-radius: 30px 30px 0px 0px;
  background-color: #d6f0ff;
`;

const BottomWrapper = styled.div`
  width: 85%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 5%;
  padding: 6% 2% 6% 2%;
`;

const Category = styled.div`
  font-size: 16x;
  width: fit-content;
  padding: 2px 9px 2px 9px;
  text-align: center;
  border-radius: 30px;
  background: var(--light-gray, #dadada);
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

const CategoryRow = styled.div`
  width: fit-content;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: space-between;
`;

const Text1 = styled.div`
  font-size: 19px;
  font-weight: 500;
`;

const Text2 = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--gray, #888);
`;

const Text3 = styled.div`
  font-size: 11px;
  font-weight: 300;
  color: var(--gray, #888);
`;

const Text4 = styled.div`
  font-size: 11px;
  font-weight: 300;
  color: var(--gray, #888);
`;
