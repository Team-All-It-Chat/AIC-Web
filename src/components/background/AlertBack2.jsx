import React from "react";
import { styled } from "styled-components";

const AlertBack2 = () => {
  return (
    <>
      <Wrapper>
        <Image1 src="/img/Mentor_ori 1.png" />
        <Image1 src="/img/Mentee_ori 1.png" />
      </Wrapper>
    </>
  );
};

export default AlertBack2;

const Image1 = styled.img`
  height: 450px;
  /* object-fit: contain; */
  @media (max-width: 900px) {
    height: 250px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  height: 75%;
  position: absolute;
  bottom: 0;
  z-index: -1;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
