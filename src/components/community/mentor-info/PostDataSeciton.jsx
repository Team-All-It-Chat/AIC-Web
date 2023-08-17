import React, { useState } from "react";
import MiniCard from "./MiniCard";
import { styled } from "styled-components";

const PostDataSection = ({ postList }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const sortedPostList = postList.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  const postsPerPage = 2;
  const startIndex = currentPage * postsPerPage;
  const visiblePosts = sortedPostList.slice(startIndex, startIndex + postsPerPage);

  const totalPages = Math.ceil(sortedPostList.length / postsPerPage);

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
          <MiniCard key={post.id} post={post} />
        ))}
      </CardWrapper>
      <Btn onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
        &gt;
      </Btn>
    </Wrapper>
  );
};

export default PostDataSection;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 160px));
  grid-gap: 10px;
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
