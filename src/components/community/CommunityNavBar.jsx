import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const CommunityNavBar = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LogoWrapper onClick={() => navigate(`/`)}>
        <LogoImage src="/img/navlogo.png" />
      </LogoWrapper>
      <ButtonWrapper>
        <HamburgerBtn>≡</HamburgerBtn>
        <ProfileCircle>
          <ProfileImg src="/img/navprofile.png" />
        </ProfileCircle>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CommunityNavBar;

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

const ButtonWrapper = styled.div`
  font-size: 1.4rem;
  display: flex;
  gap: 20px;
  margin-right: 5%;
  justify-content: space-between;
  align-items: center;
`;

const HamburgerBtn = styled.button`
  all: unset;
  color: black;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5.3rem;
  font-weight: 250;
  cursor: pointer;
`;

const ProfileCircle = styled.div`
  height: 40px;
  aspect-ratio: 1 / 1;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
