import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Goback = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return <Arrow src="/img/arrowLeft.png" onClick={goBack} />;
};

export default Goback;

const Arrow = styled.img`
  height: 33px;
  margin-top: 1px;
  margin-right: 1rem;
  cursor: pointer;
`;
