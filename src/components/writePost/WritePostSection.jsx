import React from "react";
import { styled } from "styled-components";

const WritePostSection = () => {
  return (
    <Wrapper>
      <Form>
        <TitleInput type="title" placeholder="제목"></TitleInput>
        <ImgSection>
          <ImgInput type="file" />
        </ImgSection>
        <Text>키워드를 2개 골라주세요.</Text>
        <KeywordWrapper>
          <Keyword>진로</Keyword>
          <Keyword>여행</Keyword>
          <Keyword>수업</Keyword>
          <Keyword>축제</Keyword>
          <Keyword>동아리</Keyword>
          <Keyword>어학</Keyword>
          <Keyword>꿀팁</Keyword>
          <Keyword>기숙사</Keyword>
          <Keyword>교환준비</Keyword>
          <Keyword>교환후기</Keyword>
          <Keyword>짐싸기</Keyword>
          <Keyword>현지문화</Keyword>
        </KeywordWrapper>
        <ContentInput
          type="content"
          placeholder="교환학생 꿀팁을 자유롭게 적어주세요."
        ></ContentInput>
        <SubmitBtn type='submit'>게시글 업로드</SubmitBtn>
      </Form>
    </Wrapper>
  );
};

export default WritePostSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  min-height: 90vh;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 500px;
  height: fit-content;
  min-height: 90vh;
  align-items: center;
  justify-content: center;
  margin-bottom: 3%;
`;

const TitleInput = styled.input`
  width: 90%;
  height: 50px;
  font-size: 4.5rem;
  border: 0;
  border-bottom: solid 1px var(--light-gray, #dadada);
  outline: none;
  padding: 20px 0px 20px 0px;
  background-color: white;
  margin-bottom: 20px;
  color: black;
  font-weight: 600;
  &::placeholder {
    color: var(--light-gray, #dadada);
    font-weight: 600;
  }
`;

const ImgSection = styled.div`
  width: 90%;
  min-height: 400px;
  background-color: var(--light-gray, #dadada);
`;

const ImgInput = styled.input`
  width: 300px;
  height: 100px;
`;

const Text = styled.div`
  width: 90%;
  font-size: 20px;
  font-weight: 400;
  color: var(--dark-gray, #585858);
  margin-top: 5%;
  margin-bottom: 2%;
`;

const KeywordWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 8px;
`;

const Keyword = styled.div`
  width: fit-content;
  display: flex;
  padding: 2px 11px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 30px;
  border: 1px solid var(--dark-gray, #585858);
  background: #fff;
`;

const ContentInput = styled.textarea`
  font-size: 20px;
  font-weight: 400;
  text-align: start;
  outline: none;
  width: 90%;
  height: 500px;
  border: 0;
  border-top: solid 1px var(--light-gray, #dadada);
  border-bottom: solid 1px var(--light-gray, #dadada);
  color: black;
  margin-top: 4%;
  resize: none;
  padding: 25px 0 0 0;
  &::placeholder {
    color: var(--light-gray, #dadada);
  }
`;

const SubmitBtn = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-width: 400px;
  bottom: 0;
  margin-top: 2%;
  background-color: #ffd5d5;
  border-radius: 30px;
  background: linear-gradient(180deg, #ffb65b 0%, #ff992d 100%);
  color: white;
  font-size: 2.3rem;
  font-weight: 700;
  cursor: pointer;
`;