import React from "react";
import { styled } from "styled-components";
import SignupBtn from "../signupBtn/SignupBtn";
import PasswordInput from "../common/PasswordInput";
import UnivDropdown from "../common/UnivDropdown";
import MajorDropdown from "../common/MajorDropdown";

const MentorSection = () => {
  return (
    <>
      <Wrapper>
        <Title>멘토 회원가입</Title>
        <SignupWrapper>
          <Title2>프로필 정보</Title2>
          <Line />
          <InputWrapper>
            <Text>닉네임</Text>
            <Input placeholder="한글로 닉네임을 입력해덕!"></Input>
            <Btn>중복확인</Btn>
          </InputWrapper>
          <InputWrapper>
            <Text>아이디</Text>
            <Input></Input>
            <Btn>중복확인</Btn>
          </InputWrapper>
          <PasswordInput />
          <Title2>학교/전공 정보</Title2>
          <Line />
          <InputWrapper>
            <Text>학교 선택</Text>
            <UnivDropdown />
          </InputWrapper>
          <InputWrapper>
            <Text>전공 선택</Text>
            <MajorDropdown />
          </InputWrapper>
          <InputWrapper>
            <Text>이메일</Text>
            <Input placeholder="example@gmail.com" type="email"></Input>
            <Btn>인증</Btn>
          </InputWrapper>
          <InputWrapper>
            <Text>인증번호 입력</Text>
            <Input></Input>
            <Btn>확인</Btn>
          </InputWrapper>
        </SignupWrapper>
        <SignupBtn name="멘토" />
      </Wrapper>
    </>
  );
};

export default MentorSection;

const Btn = styled.button`
  width: 80px;
  height: 45px;
  background-color: white;
  color: #89cdf6;
  border: 2px solid #89cdf6;
  border-radius: 10px;
  display: center;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin-left: 1.9rem;
  cursor: pointer;
  &:hover {
    background-color: #89cdf6;
    color: white;
  }
`;

const Text = styled.div`
  width: 100px;
  font-size: 15px;
  color: grey;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* text-align: center; */
`;

const InputWrapper = styled.div`
  width: 470px;
  height: 300px;
  display: flex;
  /* background-color: yellow; */
  /* justify-content: space-evenly; */
  align-items: center;
`;

const Input = styled.input`
  font-size: 14px;
  height: 20px;
  width: 250px;
  border-radius: 8px;
  border: 1px solid #888;
  padding: 10px;
  &::placeholder {
    color: darkgray;
    font-size: 13px;
    font-weight: 300;
    opacity: 1;
  }
`;

const Line = styled.div`
  width: 85%;
  /* height: 1px; */
  bottom: 0;
  border-bottom: 1px solid #707070;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
  color: black;
  font-weight: 800;
`;

const Title2 = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 4rem;
  margin-bottom: 1rem;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1000px;
  background-color: white;
`;

const SignupWrapper = styled.div`
  width: 550px;
  height: 780px;
  border: 3px solid #89cdf6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 30px;
`;
