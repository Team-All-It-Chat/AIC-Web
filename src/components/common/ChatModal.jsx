import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const ChatModal = ({ name }) => {
  const navigate = useNavigate();

  const SelectImage = (isMentor) => {
    return (
      <>
        {isMentor ? (
          <Image src="/img/adventureduck.png" />
        ) : (
          <Image src="/img/cloud_ori.png" />
        )}
      </>
    );
  };
  return (
    <Wrapper>
      <ModalSection>
        <Title>{name} 완료</Title>
        <Text>정성스런 {name} 고맙덕</Text>
        <SelectImage />
        <Btn onClick={() => navigate("/community/아시아/mentor")}>
          메인 페이지로 이동
        </Btn>
      </ModalSection>
    </Wrapper>
  );
};

export default ChatModal;

const Btn = styled.div`
  width: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5%;
  height: 52px;
  background-color: #ffd5d5;
  color: black;
  border-radius: 30px;
  background: linear-gradient(180deg, #c5e9ff 0%, #89cdf6 100%);
  font-size: 2.3rem;
  font-weight: 580;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const Image = styled.img`
  width: 200px;
`;

const Text = styled.div`
  font-size: 25px;
  font-weight: 300;
  color: var(--dark-gray, #585858);
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: var(--dark-gray, #585858);
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 480px;
  height: 350px;
  border: 3px solid var(--m-skyblue, #89cdf6);
  border-radius: 30px;
  padding: 40px 20px;
  background-color: white;
  font-size: 16px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 3%;
`;
