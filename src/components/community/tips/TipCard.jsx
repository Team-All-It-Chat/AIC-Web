import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { getMentorInfo } from "../../../apis/accounts";

const TipCard = ({ tip }) => {
  const navigate = useNavigate();
  const [writer, setWriter] = useState(null);
  const id = tip.id;
  const title =
    tip.title.length > 15 ? tip.title.substring(0, 15) + "..." : tip.title;
  let contentPreview =
    tip.content.length > 70
      ? tip.content.substring(0, 70) + "..."
      : tip.content;
  if (contentPreview[0] === '"') {
    contentPreview = contentPreview.slice(1);
  }
  const tag1 = tip.tag1 === null ? null : tip.tag1;
  const tag2 = tip.tag2 === null ? null : tip.tag2;
  const image = tip.image === null ? '/img/tip_defalut.png' : tip.image;
  const date = tip.created_at;
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  const writerId = tip.writer;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMentorInfo(writerId);
        setWriter(response.data.result.name);
      } catch (error) {
        console.log("작성자 프로필 가져오기 에러");
      }
    };
    fetchData();
  }, [writerId]);

  return (
    <Card onClick={() => navigate(`/viewPost/${id}`)}>
      <TopWrapper>
        <ThumbnailImg src={image} />
      </TopWrapper>
      <BottomWrapper>
        <Row>
          <Text1>{title}</Text1>
          <Text2>by {writer}</Text2>
        </Row>
        <Row>
          <Text3>{contentPreview}</Text3>
        </Row>
        <Row>
          <Text4>
            {year}년 {month}월 {day}일
          </Text4>
          <CategoryRow>
            {tag1 === null ? null : <Category>{tag1}</Category>}
            {tag2 === null ? null : <Category>{tag2}</Category>}
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

const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px 30px 0px 0px;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 52%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8%;
  border-radius: 30px 30px 0px 0px;
  background-color: #d6f0ff;
`;

const BottomWrapper = styled.div`
  width: 85%;
  height: 48%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 5%;
  padding: 3% 2% 6% 2%;
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
