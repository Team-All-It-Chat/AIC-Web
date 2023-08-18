import React, { useState } from "react";
import { styled } from "styled-components";
import MentorModal from "../common/MentorModal";
import MenteeModal from "../common/MenteeModal";
import { menteeLogin, mentorLogin } from "../../../apis/accounts";
import { useRecoilState } from "recoil";
import { isMentorAtom } from "../../../recoil/atoms";

const SignupSection = () => {
  const [isMentor, setIsMentor] = useRecoilState(isMentorAtom);
  const [modal, setModal] = useState(false);

  const clickMentor = async () => {
    try {
      const result = await mentorLogin();
      // console.log(result);
      const { access_token: accessToken, refresh_token: refreshToken } = result; // 구조분해할당
      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);
    } catch (error) {
      console.log("멘토 로그인 에러");
    }
    setModal(true);
    setIsMentor(true);
  };

  const clickMentee = async () => {
    try {
      const result = await menteeLogin();
      // console.log(result);
      const { access_token: accessToken, refresh_token: refreshToken } = result; // 구조분해할당
      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);
    } catch (error) {
      console.log("멘티 로그인 에러");
    }
    setModal(true);
    setIsMentor(false);
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <Image1 src="img/cloud_ori.png" />
      </ImageWrapper>
      <SignupWrapper>
        <Title>교환학생 다녀왔덕?</Title>
        <ExchangeBtn onClick={clickMentee}>
          아니. 지금 교환학생 준비 중이야!
        </ExchangeBtn>
        <ExchangeBtn onClick={clickMentor}>
          웅. 지금 파견 중 / 파견 후야!
        </ExchangeBtn>
      </SignupWrapper>
      {modal && (isMentor ? <MentorModal /> : <MenteeModal />)}
    </Wrapper>
  );
};

export default SignupSection;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 370px;
  position: absolute;
`;

const ExchangeBtn = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
  border: 3px solid #89cdf6;
  border-radius: 13px;
  margin-bottom: 3%;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #89cdf6;
    transition: 0.3s;
  }
`;

const Image1 = styled.img`
  width: 395px;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 91.3vh;
  background-color: #c5e5f6;
  /* margin-top: 5%; */
`;

const SignupWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 320px;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 5%;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: black;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 40px;
`;
