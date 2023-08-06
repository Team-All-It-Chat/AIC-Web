import React from "react";
import SignupNavBar from "../components/signup/header/SignupNavBar";
import MenteeSection from "../components/signup/menteeSignup/MenteeSection";
// 멘티 회원가입 페이지
const MenteeSignup = () => {
  return (
    <>
      <SignupNavBar />
      <MenteeSection />
    </>
  );
};

export default MenteeSignup;
