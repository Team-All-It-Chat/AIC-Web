import React from "react";
import { styled } from "styled-components";
import LandingNavBar from "../components/common/header/LandingNavBar";
import MainSection from "../components/landing/main/MainSection";
import IntroduceSection from "../components/landing/introduction/IntroduceSection";
import ReviewSection from "../components/landing/review/ReviewSection";
import CTABtn from "../components/landing/CTABtn";

const LandingPage = () => {
  return (
    <>
      <LandingNavBar />
      <SectionWrapper>
        <MainSection />
        <IntroduceSection />
        <ReviewSection />
        <CTABtn onClick={() => alert("페이지 이동합니다!")} />
      </SectionWrapper>
    </>
  );
};

export default LandingPage;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
