import React from "react";
import { styled } from "styled-components";
import CommunityNavBar from "../../community/CommunityNavBar";

const MentorSetting = () => {
  return (
    <>
      <CommunityNavBar />
      <Wrapper>
        <Img src="/img/MentorSet.png"></Img>
      </Wrapper>
    </>
  );
};

export default MentorSetting;

const Img = styled.img`
  width: 500px;
  height: 1100px;
  margin-top: 2%;
  margin-bottom: 3%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
