import React from "react";
import CommunityNavBar from "../community/CommunityNavBar";

const ApplyAlert = () => {
  return (
    <>
      <CommunityNavBar />
      <Wrapper></Wrapper>
    </>
  );
};

export default ApplyAlert;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90.3vh;
`;
