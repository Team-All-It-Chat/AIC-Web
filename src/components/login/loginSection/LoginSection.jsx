import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const LoginSection = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image1 src="img/halfduck.png" />
        <Image2 src="img/talk.png" />
      </ImageWrapper>
      <LoginWrapper>
        <Title>로그인</Title>
        <Form>
          <Inputs>
            <Text>아이디</Text>
            <Input placeholder="아이디를 입력해덕!"></Input>
            <Text>패스워드</Text>
            <Input type="password" placeholder="패스워드를 입력해덕!"></Input>
          </Inputs>
          <TextWrap>
            <Text>아이디 찾기</Text>
            <Text> | </Text>
            <Text>비밀번호 찾기</Text>
          </TextWrap>
        </Form>
        <BtnWrapper>
          <CustomLink to="/signup">계정 만들기</CustomLink>
          <LoginBtn>로그인</LoginBtn>
        </BtnWrapper>
      </LoginWrapper>
    </Wrapper>
  );
};

export default LoginSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 89vh;
  background-color: #ffffff;
  margin-top: 5%;
`;

const TextWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3%;
`;

const Image1 = styled.img`
  // 오리
  height: 100px;
`;

const Image2 = styled.img`
  // 말풍선
  margin-left: 20px;
  width: 200px;
`;

const Text = styled.div`
  font-size: 14px;
  color: grey;
`;

const BtnWrapper = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;

const LoginBtn = styled.button`
  font-weight: 800;
  background-color: #89cdf6;
  color: white;
  padding: 19px;
  border-radius: 10px;
  border: none;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
`;

const CustomLink = styled(Link)`
  color: var(--m-skyblue, #89cdf6);
  font-family: SUITE;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  /* &:visited {
    color: black;
    text-decoration: none;
  } */
`;

const LoginWrapper = styled.div`
  width: 350px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid var(--m-skyblue, #89cdf6);
  background: #fffdfd;
  padding: 30px;
  margin-bottom: 5%;
  z-index: 1;
`;

const Inputs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 8px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Input = styled.input`
  font-size: 20px;
  height: 20px;
  width: 290px;
  border-radius: 10px;
  border: 1px solid #888;
  padding: 10px;
  margin-bottom: 1rem;
  &::placeholder {
    color: darkgray;
    font-size: 13px;
    font-weight: 300;
    font-family: "OTWelcomeRA";
    opacity: 1;
  }
`;
