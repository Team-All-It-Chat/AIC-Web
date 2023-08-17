import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const PostCard = ({post}) => {
  const navigate = useNavigate();
  const id = post.id;
  const title =
    post.title.length > 25 ? post.title.substring(0, 25) + "..." : post.title;
  const image = post.image === null ? "/img/tip_defalut.png" : post.image;
  const date = post.created_at;
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);

  return (
    <Card onClick={() => navigate(`/viewPost/${id}`)}>
      <TopWrapper>
        <ThumbnailImg src={image} />
      </TopWrapper>
      <BottomWrapper>
        <Column>
          <Text1>{title}</Text1>
          <Text2>작성날짜 : {year}/{month}/{day}</Text2>
        </Column>
      </BottomWrapper>
    </Card>
  );
};

export default PostCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 270px;
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
