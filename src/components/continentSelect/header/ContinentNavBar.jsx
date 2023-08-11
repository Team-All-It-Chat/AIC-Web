import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const ContinentNavBar = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImage src="/img/navlogo.png" onClick={onClick} />
      </LogoWrapper>
    </Wrapper>
  );
};

export default ContinentNavBar;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8%;
  min-height: 64px;
  top: 0;
  background-color: #ffffff;
  z-index: 2;
`;

const LogoImage = styled.img`
  width: 82px;
`;

const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
`;
