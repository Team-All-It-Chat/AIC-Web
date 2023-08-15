import React from "react";
import { styled } from "styled-components";
import ViewStarRate from "../../community/mentor/ViewStarRate";

const ReadReview = ({ content, rate }) => {
  return (
    <>
      <ReviewSection>
        <StarWrapper>
          <Text>별점</Text>
          <ViewStarRate rate={rate} />
        </StarWrapper>
        <Text2>멘티동님의 후기</Text2>
        <Review2>{content}</Review2>
      </ReviewSection>
    </>
  );
};

export default ReadReview;

const Text2 = styled.div`
  font-size: 15px;
  font-weight: bold;
  width: 90%;
`;

const Review2 = styled.div`
  width: 85%;
  height: fit-content;
  border: 3px solid var(--m-skyblue, #89cdf6);
  border-radius: 30px;
  padding: 40px;
  background-color: white;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 3%;
  margin: 10px 0px;
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

const ReviewSection = styled.div`
  margin-top: 1%;
  width: 55%;
  min-width: 500px;
  height: fit-content;
  min-height: 250px;
  border: 3px solid #89cdf6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  padding: 15px;
  background-color: white;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 3%;
`;
