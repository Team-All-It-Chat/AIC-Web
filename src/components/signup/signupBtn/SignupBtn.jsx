import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const SignupBtn = ({ name }) => {
  const router = useNavigate();

  const onClick = () => {
    router("/continentSelect");
  };

  return <FinishBtn onClick={onClick}>{name}로 오리챗 시작하기</FinishBtn>;
};

export default SignupBtn;

const FinishBtn = styled.div`
  width: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4%;
  min-height: 38px;
  border-radius: 20px;
  background: var(--m-skyblue, #89cdf6);
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;
