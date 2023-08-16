import React from "react";
import { styled } from "styled-components";
import CommunityNavBar from "../../community/CommunityNavBar";

const MentorSetting = () => {
  return (
    <>
      <CommunityNavBar />
      <Wrapper>
        <Img></Img>
      </Wrapper>
    </>
  );
};

export default MentorSetting;

const Img = styled.img``;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
