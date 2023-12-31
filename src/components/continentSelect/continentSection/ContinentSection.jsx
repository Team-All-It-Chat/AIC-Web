import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const ContinentSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <SectionWrapper>
        <LogoWrap>
          <Image1 src="img/adventureduck.png" />
          <Text>보고싶은 대륙을 골라덕!</Text>
        </LogoWrap>
        <BtnWrap>
          <CircleWrapper onClick={() => navigate(`/community/아시아/mentor`)}>
            <Image2 src="img/asia.png" />
            <TextWrapper>
              <Text2>아시아</Text2>
              <Text3>중국, 일본 등</Text3>
            </TextWrapper>
          </CircleWrapper>
          <CircleWrapper onClick={() => navigate(`/community/유럽/mentor`)}>
            <Image2 src="img/europe.png" />
            <TextWrapper>
              <Text2>유럽</Text2>
              <Text3>영국, 프랑스 등</Text3>
            </TextWrapper>
          </CircleWrapper>
          <CircleWrapper onClick={() => navigate(`/community/아프리카/mentor`)}>
            <Image2 src="img/afreeca.png" />
            <TextWrapper>
              <Text2>아프리카</Text2>
              <Text3>이집트, 모로코 등</Text3>
            </TextWrapper>
          </CircleWrapper>
          <CircleWrapper
            onClick={() => navigate(`/community/북아메리카/mentor`)}
          >
            <Image2 src="img/northAm.png" />
            <TextWrapper>
              <Text2>북아메리카</Text2>
              <Text3>미국, 캐나다 등</Text3>
            </TextWrapper>
          </CircleWrapper>
          <CircleWrapper>
            <Image2 src="img/southAm.png" />
            <TextWrapper
              onClick={() => navigate(`/community/남아메리카/mentor`)}
            >
              <Text2>남아메리카</Text2>
              <Text3>브라질, 아르헨티나 등</Text3>
            </TextWrapper>
          </CircleWrapper>
          <CircleWrapper
            onClick={() => navigate(`/community/오세아니아/mentor`)}
          >
            <Image2 src="img/oseania.png" />
            <TextWrapper>
              <Text2>오세아니아</Text2>
              <Text3>호주, 뉴질랜드 등</Text3>
            </TextWrapper>
          </CircleWrapper>
        </BtnWrap>
      </SectionWrapper>
    </>
  );
};

export default ContinentSection;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 92vh;
`;

const CircleWrapper = styled.div`
  width: 140px;
  height: 140px;
  position: relative; /* 컨테이너를 상대적인 위치로 설정합니다. */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  img:hover {
    transition: 0.3s;
    opacity: 50%;
  }
  &:hover {
    color: black;
    img {
      transition: 0.3s;
      opacity: 50%;
    }
  }
`;

const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text3 = styled.div`
  width: 50%;
  text-align: center;
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  font-size: 10px;
  font-weight: bold;
  padding: 10px 20px;
  margin-top: 1px;
`;

const Text2 = styled.div`
  width: 50%;
  text-align: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: bold;
`;

const Text = styled.div`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 20px;
`;

const Image2 = styled.img`
  // 동그라미
  margin: 25px;
  height: 140px;
`;

const BtnWrap = styled.div`
  width: 40%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 4%;
  gap: 30px;
`;

const Image1 = styled.img`
  // 오리
  height: 100px;
`;

const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
