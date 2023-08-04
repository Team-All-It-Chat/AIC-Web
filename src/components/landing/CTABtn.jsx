import React from "react";
import { styled } from "styled-components";

const CTABtn = ({ onClick }) => {
  return <CTA onClick={onClick}>오리챗 시작하기</CTA>;
};

export default CTABtn;

const CTA = styled.div`
  width: 76%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5%;
  min-height: 64px;
  bottom: 0;
  margin-bottom: 1.5%;
  background-color: #ffd5d5;
  z-index: 2;
  border-radius: 30px;
  background: linear-gradient(180deg, #ffb65b 0%, #ff992d 100%);
  color: white;
  font-size: 2.3rem;
  font-weight: 700;
`;
