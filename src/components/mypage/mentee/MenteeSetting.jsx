import React from "react";
import { styled } from "styled-components";
import CommunityNavBar from "../../community/CommunityNavBar";

const MenteeSetting = () => {
  return (
    <>
      <CommunityNavBar />
      <Wrapper>
        <Img src="/img/MenteeSet.png"></Img>
      </Wrapper>
    </>
  );
};

export default MenteeSetting;

const Img = styled.img`
  width: 550px;
  height: 760px;
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
