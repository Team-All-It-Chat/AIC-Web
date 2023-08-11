import React from "react";
import { styled } from "styled-components";
import PostCard from "./PostCard";

const PostsModal = () => {
  return (
    <Wrapper>
      <Card>
        <Text>
          <div>새 게시글</div>
          <div>작성하기</div>
        </Text>
        <Img src="/img/mainduck.png" />
      </Card>
      <PostCard />
      <PostCard />
    </Wrapper>
  );
};

export default PostsModal;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 2%;
  flex-wrap: wrap;
  margin-top: 3%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 300px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  background: linear-gradient(180deg, #fff 0%, #e9f7ff 0.01%, #bce6f6 100%);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 2%;
  overflow: hidden;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: "SUITE-Regular";
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  position: relative;
  top: 12%;
  left: 7%;
`;

const Img = styled.img`
margin-left: 50%;
  width: 200px;
`;
