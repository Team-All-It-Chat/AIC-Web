import React, { useState } from "react";
import { styled } from "styled-components";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [color, setColor] = useState("white");
  const [color2, setColor2] = useState("white");
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePassword = () => {
    const pattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;

    if (!pattern.test(password)) {
      setPassword("");
      setColor("red");
      setText("⚠️ 영어, 숫자, 특수문자를 포함하여 6~12자로 다시 입력해주세요!");
    } else {
      setColor("green");
      setText("✅완료되었습니다.");
    }
  };

  const handleCheck = (e) => {
    setCheckPw(e.target.value);
  };

  const checkPassword = () => {
    if (password !== checkPw) {
      setText2("⚠️입력하신 비밀번호와 일치하지 않습니다!");
      setColor2("red");
    } else {
      setText2("✅완료되었습니다.");
      setColor2("green");
    }
  };

  return (
    <>
      <InputWrapper>
        <Text>패스워드</Text>
        <PwWrapper>
          <Input
            type="password"
            placeholder="영어, 숫자, 특수문자를 포함하여 6~12자"
            onChange={handlePasswordChange}
            onBlur={validatePassword}
          />
          <Alert style={{ color: color }}>{text}</Alert>
        </PwWrapper>
      </InputWrapper>
      <InputWrapper>
        <Text>패스워드 확인</Text>
        <PwWrapper>
          <Input
            type="password"
            placeholder="위에 작성한 패스워드를 입력해주세요."
            onChange={handleCheck}
          />
          <Alert2 style={{ color: color2 }}>{text2}</Alert2>
        </PwWrapper>
        <Btn onClick={checkPassword}>확인</Btn>
      </InputWrapper>
    </>
  );
};

export default PasswordInput;

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
  margin-bottom: 1%;
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

const PwWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 60px;
`;

const Alert = styled.div`
  margin-top: 7px;
  margin-left: 3px;
  font-size: 13px;
  font-weight: bold;
  color: white;
`;

const Alert2 = styled.div`
  margin-top: 7px;
  margin-left: 3px;
  font-size: 13px;
  font-weight: bold;
  color: white;
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
  margin-top: 8px;
`;
