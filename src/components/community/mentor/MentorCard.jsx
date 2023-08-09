import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const MentorCard = ({num}) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/viewMentor/${num}`)}>
      <TopWrapper>
        <ProfileCircle>
          <ProfileImg src="/img/mainduck.png" />
        </ProfileCircle>
        <ProfileText>
          <Text1>
            <strong>오동동{num}</strong> 멘토님
          </Text1>
          <Country>중국</Country>
          <Text2>중앙대학교</Text2>
          <Row>
            <Category>어학</Category>
            <Category>문화/생활</Category>
          </Row>
        </ProfileText>
      </TopWrapper>
      <Line />
      <BottomWrapper>
        <Text3>총 4 번의 오리챗을 했어요</Text3>
        <Row>
          <Text4>오동동 광팬</Text4>
          <Star src="/img/stars.png"></Star>
        </Row>
        <Text5>
          내생일파티에 너만 멋 온 그날 혜지니가 머시기 혼 난 날~지워니가
          여친이랑 헤어진그날 걔는 너가 없이 아주 기냥 아주 멋..
        </Text5>
      </BottomWrapper>
    </Card>
  );
};

export default MentorCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 300px;
  height: 260px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 2%;
`;

const ProfileCircle = styled.div`
  height: 100%;
  aspect-ratio: 1 / 1;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const TopWrapper = styled.div`
  width: 85%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8%;
`;

const BottomWrapper = styled.div`
  width: 85%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 5%;
`;

const Line = styled.div`
  width: 85%;
  height: 1px;
  flex-shrink: 0;
  background: #d9d9d9;
`;

const ProfileText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

const Text1 = styled.div`
  font-size: 14px;
  font-weight: 350;
`;

const Country = styled.div`
  font-size: 13px;
  width: fit-content;
  padding: 3px 8px 3px 8px;
  text-align: center;
  border-radius: 30px;
  background: var(--orange, #ffa946);
`;

const Text2 = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const Category = styled.div`
  font-size: 16x;
  width: fit-content;
  padding: 2px 9px 2px 9px;
  text-align: center;
  border-radius: 30px;
  background: var(--light-gray, #dadada);
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const Text3 = styled.div`
  width: fit-content;
  text-align: center;
  font-size: 15px;
  font-weight: 320;
  border-radius: 30px;
  padding: 2px 9px 2px 9px;
  border: 1px solid var(--dark-gray, #585858);
`;

const Text4 = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding-left: 3%;
`;

const Star = styled.img`
  width: 80px;
  height: 14px;
`;

const Text5 = styled.div`
  font-size: 11px;
  font-weight: 300;
  padding-left: 3%;
`;
