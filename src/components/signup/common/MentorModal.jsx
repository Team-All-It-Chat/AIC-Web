import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { mentorImgAtom } from "../../../recoil/atoms";

const MentorModal = () => {
  const setMentorImg = useSetRecoilState(mentorImgAtom);
  const images = [
    "/img/duck1.png",
    "/img/duck2.png",
    "/img/duck3.png",
    "/img/duck4.png",
    "/img/duck5.png",
    "/img/duck6.png",
  ];
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onClick = () => {
    navigate("/continentSelect");
    setMentorImg(images[currentImageIndex]);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Wrapper>
      <ModalSection>
        <Title>멘토 등록 완료</Title>
        <ImageNav>
          <NavButton onClick={prevImage}>&#8592;</NavButton>
          <Image src={images[currentImageIndex]} />
          <NavButton onClick={nextImage}>&#8594;</NavButton>
        </ImageNav>
        <Text>앞으로의 교환학생 과정을 응원한덕!</Text>
        <Btn onClick={onClick}>오리챗 시작하기</Btn>
      </ModalSection>
    </Wrapper>
  );
};

export default MentorModal;

const ImageNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  z-index: 4;
`;

const NavButton = styled.div`
  font-size: 3rem;
  color: #333;
  cursor: pointer;
`;

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
  width: 150px;
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
