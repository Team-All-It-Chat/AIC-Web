import React from "react";
import SignupNavBar from "../../components/signup/header/SignupNavBar";
import SignupSection from "../../components/signup/signupSection/SignupSection";
// 회원가입 페이지
const SignupPage = () => {
  return (
    <>
      <SignupNavBar />
      <SignupSection />
    </>
  );
};

export default SignupPage;
