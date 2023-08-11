import React from "react";
import { styled } from "styled-components";

const PostCard = () => {
  return (
    <Card>
      <TopWrapper>
        <ThumbnailImg src="/img/postimg.png" />
      </TopWrapper>
      <BottomWrapper>
        <Column>
          <Text1>(제목) 중국 퀸카카카카~</Text1>
          <Text2>작성날짜 : 22/09/11</Text2>
        </Column>
        <Btn>보러가기</Btn>
      </BottomWrapper>
    </Card>
  );
};

export default PostCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 300px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 2%;
`;

const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0px 0px;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8%;
  border-radius: 15px 15px 0px 0px;
  background-color: #d6f0ff;
`;

const BottomWrapper = styled.div`
  width: 85%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5%;
  padding: 6% 2% 6% 2%;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  justify-content: space-between;
`;

const Text1 = styled.div`
  font-size: 17px;
  font-weight: 500;
`;

const Text2 = styled.div`
  font-size: 10px;
  font-weight: 300;
  color: var(--dark-gray, #585858);
`;

const Btn = styled.div`
  border-radius: 30px;
  width: 118px;
  height: 33px;
  border: 1px solid var(--dark-gray, #585858);
  font-size: 1.3rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1%;
`;
