import React from "react";
import { styled } from "styled-components";

const ApplyBack = () => {
  return (
    <>
      <Wrapper>
        <Image1 src="/img/background.png" />
      </Wrapper>
    </>
  );
};

export default ApplyBack;

const Image1 = styled.img`
  height: 520px;
  object-fit: contain;
  @media (max-width: 900px) {
    height: 200px;
    margin-right: 2.7rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100px;
  height: 150%;
  position: absolute;
  bottom: 0;
  z-index: -1;
`;
