import React, { useState } from "react";
import { styled } from "styled-components";
import PostCard from "./PostCard";

const PostDataSectionMypage = ({ postList }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const postsPerPage = 2;
  const startIndex = currentPage * postsPerPage;
  const visiblePosts = postList.slice(startIndex, startIndex + postsPerPage);

  const totalPages = Math.ceil(postList.length / postsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <Wrapper>
      <Btn onClick={goToPreviousPage} disabled={currentPage === 0}>
        &lt;
      </Btn>
      <CardWrapper>
        {visiblePosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </CardWrapper>
      <Btn onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
        &gt;
      </Btn>
    </Wrapper>
  );
};

export default PostDataSectionMypage;

const Wrapper = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
  grid-gap: 5px;
  justify-content: center;
  padding: initial;
  height: fit-content;
`;

const Btn = styled.button`
  font-size: 18px;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  color: black;
  background-color: transparent;
  &:disabled {
    color: #e2e2e2;
    cursor: default;
  }
`;
