import React from "react";
import { styled } from "styled-components";

const ApplyBack = () => {
  return (
    <>
      <Wrapper>
        <Image1 src="/img/earth.png" />
      </Wrapper>
    </>
  );
};

export default ApplyBack;

const Image1 = styled.img`
  width: 100%;
  bottom: 0;
  position: fixed;
  height: 30%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90.3vh;
`;
