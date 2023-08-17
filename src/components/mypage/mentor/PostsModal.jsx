import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { getAllPost } from "../../../apis/posts";
import PostDataSectionMypage from "./PostDataSectionMypage";

const PostsModal = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllPost();
      const mentorPost = response.result.filter((tip) => tip.writer === 3);
      setPostList(mentorPost);
      console.log(mentorPost);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Card onClick={() => navigate(`/writePost`)}>
        <Text>
          <div>새 게시글</div>
          <div>작성하기</div>
        </Text>
        <Img src="/img/mainduck.png" />
      </Card>
      <PostDataSectionMypage postList={postList} />
    </Wrapper>
  );
};

export default PostsModal;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin-top: 3%;
  gap: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  height: 270px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  background: linear-gradient(180deg, #fff 0%, #e9f7ff 0.01%, #bce6f6 100%);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 2%;
  overflow: hidden;
  cursor: pointer;
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
