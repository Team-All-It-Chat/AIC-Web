import React from "react";
import { styled } from "styled-components";

const LandingNavBar = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImage src="/img/navlogo.png" />
      </LogoWrapper>
      <ButtonWrapper>
        <LoginBtn>로그인</LoginBtn>
        <SignupBtn>회원가입</SignupBtn>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default LandingNavBar;

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8%;
  min-height: 64px;
  top: 0;
  background-color: white;
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

const ButtonWrapper = styled.div`
  font-size: 1.4rem;
  display: flex;
  gap: 20px;
  margin-right: 5%;
  justify-content: space-between;
  align-items: center;
`;

const LoginBtn = styled.button`
  all: unset;
  background-color: white;
  color: black;
  width: 7vw;
  min-width: 88px;
  height: 3vh;
  min-height: 32px;
  padding: 5px;
  border-radius: 30px;
  border: 1px solid #585858;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
`;

const SignupBtn = styled.button`
  all: unset;
  background: #585858;
  color: white;
  width: 7vw;
  min-width: 88px;
  height: 3vh;
  min-height: 32px;
  padding: 5px;
  border-radius: 30px;
  border: 1px solid #353535;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
`;
