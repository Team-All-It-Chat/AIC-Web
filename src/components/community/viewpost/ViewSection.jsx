import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { deletePost, getPost } from "../../../apis/posts";
import { getMentorInfo } from "../../../apis/accounts";
import { useRecoilValue } from "recoil";
import { continentAtom, isMentorAtom } from "../../../recoil/atoms";

const ViewSection = () => {
  const router = useNavigate();
  const [tip, setTip] = useState(null);
  const [mentorId, setMentorId] = useState(null);
  const [writer, setWriter] = useState(null);
  const { id } = useParams();
  const isMentor = useRecoilValue(isMentorAtom);
  const continent = useRecoilValue(continentAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await getPost(id);
        setTip(response1.data.result);
        const writerId = response1.data.result.writer; // Get writer ID from the response
        const response2 = await getMentorInfo(writerId);
        setMentorId(writerId);
        setWriter(response2.data.result.name);
      } catch (error) {
        console.log("특정 게시물 가져오기 에러");
      }
    };
    fetchData();
  }, [id]);

  const onClick = () => {
    router(`/apply/${mentorId}`);
  };

  const deleteBtn = () => {
    const userConfirmed = window.confirm("게시글을 삭제 하시겠습니까?");
    if(userConfirmed) {
      deletePost(id);
      alert('삭제되었습니다');
      router(`/community/${continent}/tips`);
    }
  }

  // 데이터가 세팅 되기 전까지 컴포넌트 렌더링 x
  if (tip === null) {
    return null;
  }

  const title = tip.title;
  let content = tip.content;
  if (content[0] === '"' && content[content.length - 1] === '"') {
    content = content.slice(1, -1);
  }
  const tag1 = tip.tag1 === null ? null : tip.tag1;
  const tag2 = tip.tag2 === null ? null : tip.tag2;
  const image = tip.image;
  const date = tip.created_at;
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);

  return (
    <Wrapper>
      <ViewWrapper>
        <Title>{title}</Title>
        <InfoSection>
          <MentorName>{writer}</MentorName>
          <Date>
            {year}년 {month}월 {day}일
          </Date>
        </InfoSection>
        <Row1>
          <Row2>
            {tag1 === null ? null : <Category>{tag1}</Category>}
            {tag2 === null ? null : <Category>{tag2}</Category>}
          </Row2>
          <Row2>
            {mentorId === 3 && isMentor ? (
              <>
                <PostBtn>수정</PostBtn>
                <PostBtn onClick={deleteBtn}>삭제</PostBtn>
              </>
            ) : null}
          </Row2>
        </Row1>
        <Image src={image} />
        <Post>{content}</Post>
      </ViewWrapper>
      {isMentor ? null : (
        <>
          <Text>멘토와 대화를 나누고싶덕?</Text>{" "}
          <Btn onClick={onClick}>오리챗 신청하기</Btn>
        </>
      )}
    </Wrapper>
  );
};

export default ViewSection;

const Btn = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5%;
  min-width: 420px;
  min-height: 64px;
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

const Text = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Image = styled.img`
  margin-top: 3%;
  height: 50%;
  width: 100%;
`;

const Post = styled.div`
  height: fit-content;
  width: 100%;
  font-size: 14px;
  margin-bottom: 50px;
  white-space: pre-line;
`;

const Date = styled.div`
  font-size: 14px;
  text-align: center;
  height: 100%;
`;

const MentorName = styled.div`
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  height: 100%;
`;

const InfoSection = styled.div`
  display: flex;
  width: fit-content;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const ViewWrapper = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 580px;
  height: fit-content;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
  width: 100%;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: black;
  font-weight: 800;
  margin-bottom: 10px;
`;

const Row1 = styled.div`
  margin-top: 1%;
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

const Row2 = styled.div`
  margin-top: 1%;
  width: fit-content;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Category = styled.div`
  font-size: 15px;
  width: fit-content;
  padding: 10px 19px;
  text-align: center;
  border-radius: 30px;
  border-radius: 30px;
  background: #f8f8f8;
  color: var(--m-skyblue, #89cdf6);
`;

const PostBtn = styled.div`
  font-size: 10px;
  width: fit-content;
  padding: 6px 19px;
  text-align: center;
  background: #f8f8f8;
  border: 1px solid;
  color: black;
  cursor: pointer;
`;
