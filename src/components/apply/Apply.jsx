import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import ApplyBack from "../background/ApplyBack";
import ChatModal from "../common/ChatModal";
import { getMentorInfo } from "../../apis/accounts";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { applyQuestion } from "../../apis/chat";

// 오리챗 신청 페이지
const Apply = () => {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [answerer, setAnswerer] = useState(null);
  const [question, onChangeQuestion] = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMentorInfo(id);
        setAnswerer(response.data.result.name);
      } catch (error) {
        console.log("멘토 프로필 가져오기 에러");
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = () => {
    const confirmed = window.confirm("신청하시겠습니까❓");
    if (confirmed) {
      const body = {
        question: question,
        answerer: id,
      };
      console.log(body);
      applyQuestion(body);
      setModal(true);
    }
  };
  return (
    <>
      <Wrapper>
        <ApplyWrapper>
          <ProfileCircle>
            <ProfileImg src="/img/mentor_profile.png" />
          </ProfileCircle>
          <Text1>{answerer}</Text1>
          <Text2>멘토님에게 질문 보내기</Text2>
          <QuestionSection
            type="question"
            placeholder="질문을 작성해덕!"
            value={question}
            onChange={onChangeQuestion}
          ></QuestionSection>
          <Btn onClick={handleSubmit} type="submit">
            오리챗 신청하기
          </Btn>
        </ApplyWrapper>
        <ApplyBack />
        {modal && <ChatModal isMentor={false} name={"오리챗 신청"} />}
      </Wrapper>
    </>
  );
};

export default Apply;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 90vh;
`;

const ApplyWrapper = styled.div`
  width: 33%;
  min-width: 400px;
  height: 490px;
  border: 3px solid #89cdf6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  background-color: white;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Btn = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5%;
  min-width: 60%;
  min-height: 54px;
  bottom: 0;
  margin-bottom: 1.5%;
  background-color: #ffd5d5;
  color: black;
  border-radius: 30px;
  background: linear-gradient(180deg, #c5e9ff 0%, #89cdf6 100%);
  font-size: 2.3rem;
  font-weight: 580;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Text2 = styled.div`
  font-size: 18px;
`;

const Text1 = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ProfileCircle = styled.div`
  height: 15%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 3px solid #89cdf6;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green, #7fbc7a);
`;

const QuestionSection = styled.textarea`
  width: 80%;
  height: 30%;
  border: 3px solid var(--m-skyblue, #89cdf6);
  border-radius: 30px;
  padding: 30px;
  background-color: white;
  font-size: 16px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 3%;
  resize: none; /* 세로 크기 조절을 허용 */
  line-height: 1.5; /* 줄 간격 설정 */
  outline: none;
  font-family: "Times New Roman";
`;
