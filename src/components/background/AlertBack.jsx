import React from "react";
import { styled } from "styled-components";

const AlertBack = () => {
  return (
    <>
      <Wrapper>
        <Image1 src="/img/Mentee_ori 1.png" />
        <Image1 src="/img/Mentor_ori 1.png" />
      </Wrapper>
    </>
  );
};

export default AlertBack;

const Image1 = styled.img`
  height: 450px;
  @media (max-width: 900px) {
    height: 250px;
    /* margin-right: 2.7rem; */
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 50%;
  position: absolute;
  bottom: 0;
  z-index: -1;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
