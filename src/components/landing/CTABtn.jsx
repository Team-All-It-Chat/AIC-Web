import React from "react";
import { keyframes, styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const CTABtn = () => {
  const navigate = useNavigate();

  const onClick = () => {
    const confirmed = window.confirm("로그인을 먼저 해주세요!");
    if (confirmed) {
      navigate("/signup");
    }
  };
  return <CTA src="/img/CTA.png" onClick={onClick}></CTA>;
};

export default CTABtn;

const rotateAnimation = keyframes`
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
`;

const FloatingImage = styled.img`
  position: absolute;
`;

const CTA = styled(FloatingImage)`
  width: 200px;
  height: fit-content;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 20px;
  margin-bottom: 1.5%;
  z-index: 2;
  color: white;
  font-size: 2.3rem;
  font-weight: 700;
  cursor: pointer;
  animation: ${rotateAnimation} 2s infinite;
`;
