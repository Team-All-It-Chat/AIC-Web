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
  height: 30%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  z-index: -1;
`;
