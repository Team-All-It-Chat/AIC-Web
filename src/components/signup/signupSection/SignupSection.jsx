import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SignupSection = () => {
  // const [isMentor, setIsMentor] = useState(true);
  const navigate = useNavigate();

  const clickMentor = () => {
    // setIsMentor(true);
    navigate("/mentorSignup");
  };

  const clickMentee = () => {
    // setIsMentor(false);
    navigate("/menteeSignup");
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
