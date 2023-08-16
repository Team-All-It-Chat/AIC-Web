import React from "react";
import { styled } from "styled-components";

const QuestionModal = ({ database, closeModal }) => {
  const onClick = () => {
    closeModal();
  };
  return (
    <Wrapper>
      <ModalSection>
        <ProfileCircle>
          <ProfileImg src={`/img/duck${database.answerer.profile}.png`} />
        </ProfileCircle>
        <QuestionWrapper>
          <Title>{`${database.answerer.name} 멘토님에게 질문`}</Title>
          <Text>{`${database.question}`}</Text>
        </QuestionWrapper>
        <Btn onClick={onClick}>X</Btn>
      </ModalSection>
    </Wrapper>
  );
};

export default QuestionModal;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: fit-content;
  padding: 10px;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileCircle = styled.div`
  height: 80px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 2px solid #c5e5f6;
  background-color: white;
  margin-right: 2%;
`;

const Btn = styled.div`
  position: absolute;
  background-color: white;
  top: 17px;
  right: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  color: black;
  border-radius: 10px;
  border: 3px solid var(--m-skyblue, #c5e5f6);
  font-size: 2.3rem;
  font-weight: bold;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    background-color: #c5e5f6;
    color: white;
  }
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: var(--dark-gray, #585858);
  width: 100%;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: black;
  margin-bottom: 1.5rem;
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
  position: relative; /* 추가: 상대 위치 지정 */
  margin-top: 1%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 15px;
  border-radius: 20px;
  width: 700px;
  min-width: 500px;
  height: fit-content;
  background-color: white;
  border: 4px solid var(--l-skyblue, #c5e5f6);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;
