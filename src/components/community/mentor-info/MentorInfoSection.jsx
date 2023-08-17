import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { getMentorProfiles } from "../../../apis/accounts";
import { isMentorAtom } from "../../../recoil/atoms";
import { useRecoilValue } from "recoil";
import { getAllPost } from "../../../apis/posts";
import PostDataSeciton from "./PostDataSeciton";

const MentorInfoSection = () => {
  const navigate = useNavigate();
  const { continent } = useParams();
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);
  const [postList, setPostList] = useState([]);
  const isMentor = useRecoilValue(isMentorAtom);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMentorProfiles(continent);
      const filteredMentor = response.data.result.find(
        (mentor) => mentor.id === Number(id)
      );
      setMentor(filteredMentor);
      const response2 = await getAllPost();
      const mentorPost = response2.result.filter(
        (tip) => tip.writer === Number(id)
      );
      setPostList(mentorPost);
      console.log(mentorPost);
    };
    fetchData();
  }, [continent, id]);

  // 데이터가 세팅 되기 전까지 컴포넌트 렌더링 x
  if (mentor === null) {
    return null;
  }

  const name = mentor.name;
  const country = mentor.contry;
  const foreignUniv = mentor.foreign_univ;
  const korUniv = mentor.kor_univ;
  const major = mentor.kor_major;
  const chatCount = mentor.chat_count === null ? 0 : mentor.chat_count;
  const totalScore = mentor.total_score === null ? 0 : mentor.total_score;
  const tag1 = mentor.tag1 === null ? "키워드" : mentor.tag1;
  const tag2 = mentor.tag2 === null ? "키워드" : mentor.tag2;
  const tag3 = mentor.tag3 === null ? "키워드" : mentor.tag3;

  const getContinentNumber = (continent) => {
    switch (continent) {
      case "유럽":
        return 1;
      case "아시아":
        return 2;
      case "북아메리카":
        return 3;
      case "남아메리카":
        return 4;
      case "오세아니아":
        return 5;
      case "아프리카":
        return 6;
      default:
        return 0; // 기본값 설정
    }
  };

  const continentNum = getContinentNumber(continent);

  return (
    <Wrapper>
      <Box>
        <LeftWrapper>
          <ProfileCircle>
            <ProfileImg src={`/img/duck${continentNum}.png`} />
          </ProfileCircle>
          <Text>{name}</Text>
          <InfoWrapper>
            <Info>
              <Text2>한국 학교</Text2>
              <Text3>{korUniv}</Text3>
            </Info>
            <Info>
              <Text2>파견 학교</Text2>
              <Text3>{foreignUniv}</Text3>
            </Info>
            <Info>
              <Text2>파견 국가/언어권</Text2>
              <Text3>{country}</Text3>
            </Info>
            <Info>
              <Text2>전공</Text2>
              <Text3>{major}</Text3>
            </Info>
            <Info>
              <Text2>오리챗 횟수/평점</Text2>
              <Text3>
                {chatCount}번 / {totalScore}점
              </Text3>
            </Info>
          </InfoWrapper>
        </LeftWrapper>
        <RightWrapper>
          <Column>
            <Text>답변 가능한 주제</Text>
            <Row1>
              {tag1 === null ? null : <Category>{tag1}</Category>}
              {tag2 === null ? null : <Category>{tag2}</Category>}
              {tag3 === null ? null : <Category>{tag3}</Category>}
            </Row1>
          </Column>
          <Column>
            <Text>멘토가 작성한 게시글</Text>
            <Row2>
              <PostDataSeciton postList={postList} />
            </Row2>
          </Column>
          {isMentor ? null : (
            <Btn onClick={() => navigate(`/apply/${id}`)}>오리챗 신청하기</Btn>
          )}
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 100%;
  object-fit: cover;
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
  height: fit-content;
  min-height: 30px;
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
  width: 85%;
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
