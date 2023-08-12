import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const MenteeModal = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/continentSelect");
  };

  // const SelectImage = (isMentor) => {
  //   return (
  //     <>
  //       {isMentor ? (
  //         <Image src="/img/cloud_ori.png" />
  //       ) : (
  //         <Image src="/img/cloud_ori.png" />
  //       )}
  //     </>
  //   );
  // };
  return (
    <Wrapper>
      <ModalSection>
        <Title>멘티 등록 완료</Title>
        <Image src="/img/adventureduck.png" />
        <Text>앞으로의 교환학생 과정을 응원한덕!</Text>
        <Btn onClick={onClick}>오리챗 시작하기</Btn>
      </ModalSection>
    </Wrapper>
  );
};

export default MenteeModal;

const Btn = styled.div`
  width: 320px;
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
  font-weight: 600;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const Image = styled.img`
  width: 100px;
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
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 480px;
  height: 330px;
  border: 3px solid var(--m-skyblue, #89cdf6);
  border-radius: 30px;
  padding: 40px 20px;
  background-color: white;
  font-size: 16px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 3rem;
  position: absolute;
`;
