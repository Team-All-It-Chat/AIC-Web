import React, { useEffect, useState } from "react";
import CommunityNavBar from "../community/CommunityNavBar";
import { styled } from "styled-components";
import ChatModal from "../common/ChatModal";
import StarRate from "./StarRate";
import AlertBack2 from "../background/AlertBack2";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { submitReview, getChat } from "../../apis/chat";

const Review = () => {
  const [rate, setRate] = useState(0);
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const [review, onChangeReview] = useForm();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getChat(id);
      setData(response.data);
    };
    fetchData();
  }, [id]);

  if (!data) {
    return null;
  }

  const onClick = () => {
    const confirmed = window.confirm("전송하시겠습니까?");
    if (confirmed) {
      const body = {
        chat_id: id,
        content: review,
        rate: rate,
      };
      submitReview(body);
      setModal(true);
    }
  };

  return (
    <>
      <CommunityNavBar />
      <Wrapper>
        <Title>오리챗 후기를 남겨덕!</Title>
        <ReviewSection>
          <StarWrapper>
            <Text>별점</Text>
            <StarRate onChange={setRate} />
          </StarWrapper>
          <Text2>후기 작성하기</Text2>
          <Review2
            type="review"
            placeholder="후기를 작성해덕!"
            value={review}
            onChange={onChangeReview}
          />
          <Btn onClick={onClick}>후기 전송하기</Btn>
        </ReviewSection>
        {modal && <ChatModal isMentor={true} name={"후기 작성"} />}
        <AlertBack2 />
      </Wrapper>
    </>
  );
};

export default Review;

const Text2 = styled.div`
  font-size: 15px;
  font-weight: bold;
  width: 90%;
`;

const Btn = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5%;
  min-width: 60%;
  min-height: 52px;
  bottom: 0;
  color: black;
  border-radius: 30px;
  background: linear-gradient(180deg, #c5e9ff 0%, #89cdf6 100%);
  font-size: 2.3rem;
  font-weight: 580;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const Review2 = styled.textarea`
  width: 85%;
  height: 180px;
  border: 3px solid var(--m-skyblue, #89cdf6);
  border-radius: 30px;
  padding: 40px;
  background-color: white;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 3%;
  margin: 10px 0px;
  resize: vertical; /* 세로 크기 조절을 허용 */
  line-height: 1.5; /* 줄 간격 설정 */
  overflow: auto; /* 내용이 넘칠 경우 스크롤 생성 */
  outline: none;
  font-family: "Times New Roman";
`;

const StarWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 90%;
  padding: 10px;
  padding-bottom: 0;
  gap: 15px;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const Title = styled.div`
  width: 55%;
  font-size: 24px;
  font-weight: bold;
  color: var(--dark-gray, #585858);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  margin-top: 5%;
`;

const ReviewSection = styled.div`
  margin-top: 1%;
  width: 55%;
  min-width: 500px;
  height: fit-content;
  min-height: 500px;
  border: 3px solid #89cdf6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  padding: 15px;
  background-color: white;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 5%;
`;
