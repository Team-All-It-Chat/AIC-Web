import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import MiniCard from "./MiniCard";

const MentorInfoSection = () => {
  const navigate = useNavigate();
  const { num } = useParams();
  return (
    <Wrapper>
      <Box>
        <LeftWrapper>
          <ProfileCircle>
            <ProfileImg src="/img/mainduck.png" />
          </ProfileCircle>
          <Text>오동동{num}</Text>
          <InfoWrapper>
            <Info>
              <Text2>한국 학교</Text2>
              <Text3>중앙대학교</Text3>
            </Info>
            <Info>
              <Text2>파견 학교</Text2>
              <Text3>aaa university</Text3>
            </Info>
            <Info>
              <Text2>파견 국가/언어권</Text2>
              <Text3>중국 / 중어권</Text3>
            </Info>
            <Info>
              <Text2>전공</Text2>
              <Text3>경영경제</Text3>
            </Info>
            <Info>
              <Text2>오리챗 횟수/평점</Text2>
              <Text3>3번 / 4.0</Text3>
            </Info>
          </InfoWrapper>
        </LeftWrapper>
        <RightWrapper>
          <Column>
            <Text>답변 가능한 주제</Text>
            <Row1>
              <Category>학교생활</Category>
              <Category>어학준비</Category>
              <Category>여행꿀팁</Category>
            </Row1>
          </Column>
          <Column>
            <Text>멘토가 작성한 게시글</Text>
            <Row2>
              &lt;
              <MiniCard />
              <MiniCard />
              &gt;
            </Row2>
          </Column>
          <Btn onClick={()=> navigate(`/apply`)}>오리챗 신청하기</Btn>
        </RightWrapper>
      </Box>
    </Wrapper>
  );
};

export default MentorInfoSection;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2%;
  height: fit-content;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: aliceblue; */
`;

const Box = styled.div`
  display: flex;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  flex-wrap: wrap;
`;

const LeftWrapper = styled.div`
  border-radius: 30px;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.25);
  background: linear-gradient(180deg, #e5f9ff 0%, #c4eaf6 100%);
  width: 500px;
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 8px 0 8px 0;
`;

const ProfileCircle = styled.div`
  height: 140px;
  aspect-ratio: 1 / 1;
  background-color: white;
  border-radius: 50%;
  border: solid 3px var(--m-skyblue, #89cdf6);
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Text = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 69%;
  height: 40%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 8px 0 8px 0;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Text2 = styled.div`
  width: 40%;
  font-size: 16px;
  font-weight: 300;
`;

const Text3 = styled.div`
  font-size: 16px;
  font-weight: 300;
  border-radius: 10px;
  border: 2px solid var(--m-skyblue, #89cdf6);
  background-color: white;
  width: 60%;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 5%;
  padding-right: 3%;
`;

const RightWrapper = styled.div`
  width: 500px;
  height: 560px;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 30px;
  padding: 8px 0 8px 0;
`;

const Column = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Row1 = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Row2 = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
`;

const Category = styled.div`
  font-size: 15px;
  width: fit-content;
  padding: 12px 19px;
  text-align: center;
  border-radius: 30px;
  border-radius: 30px;
  background: #f8f8f8;
  color: var(--m-skyblue, #89cdf6);
`;

const Btn = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-width: 400px;
  bottom: 0;
  margin-bottom: 1.5%;
  background-color: #ffd5d5;
  border-radius: 30px;
  background: linear-gradient(180deg, #ffb65b 0%, #ff992d 100%);
  color: white;
  font-size: 2.3rem;
  font-weight: 700;
  cursor: pointer;
`;
