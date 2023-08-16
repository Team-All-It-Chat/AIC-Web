import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { editPost, getPost } from "../../apis/posts";

const EditPostSection = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [previewImg, setPreviewImg] = useState(null);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    getPost(id).then((result) => {
      setTitle(result.data.result.title);
      setContent(result.data.result.content);
      setPreviewImg(result.data.result.image);
      setSelectedKeywords([result.data.result.tag1, result.data.result.tag2]);
    });
  }, [id]);

  const keywords = [
    "진로",
    "여행",
    "수업",
    "축제",
    "동아리",
    "어학",
    "꿀팁",
    "기숙사",
    "교환준비",
    "교환후기",
    "짐싸기",
    "현지문화",
  ];

  // 선택 키워드 개수 검사
  const handleKeywordClick = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      // 이미 선택되어 있는 키워드면
      setSelectedKeywords(selectedKeywords.filter((kw) => kw !== keyword)); // 해당 키워드 제외해서 새로운 배열 세팅
    } else if (selectedKeywords.length < 2) {
      // 그 외의 경우
      setSelectedKeywords([...selectedKeywords, keyword]); // 새로 세팅
    }
  };

  // 이미지를 blob으로 변환해주는 함수
  async function convertExternalImageToBlob(url) {
    try {
      const response = await fetch(url); // 이미지 패키
      const blob = await response.blob(); // 이미지 blob으로 변환
      return blob;
    } catch (error) {
      console.error("Blob 전환 실패", error);
      return null;
    }
  }
  
  // 폼데이터로 전송 테스트
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("writer", 3);
    formData.append("title", title);
    formData.append("content", content);
    formData.append(
      "tag1",
      selectedKeywords.length > 0 ? selectedKeywords[0] : null
    );
    formData.append(
      "tag2",
      selectedKeywords.length > 0 ? selectedKeywords[1] : null
    );
    if (uploadedImage) {
      formData.append("image", uploadedImage);
    } else if (previewImg.startsWith("http")) {
      // 이미지 수정이 없다면 기존 서버 url이미지를 파일객체로 변환
      const blobImage = await convertExternalImageToBlob(previewImg);
      if (blobImage) {
        const file = new File([blobImage], "external_image.png", {
          type: blobImage.type,
        });
        formData.append("image", file);
      }

      editPost(id, formData);
      alert("게시글 수정 완료");
      navigate("/mypageMentor/posts");
    }
  };

  // 이미지 프리뷰 및 전송 이미지 세팅
  const insertImg = (e) => {
    let reader = new FileReader();
    // 업로드 파일 세팅 부분
    const file = e.target.files[0];
    setUploadedImage(file);

    // 프리뷰 이미지 세팅 부분
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setPreviewImg("/img/previewDefalut.svg"); // 파일 선택 취소 시 프리뷰 이미지 삭제
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (previewImgUrl) {
        setPreviewImg(previewImgUrl);
      }
    };
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <Wrapper>
      <Form>
        <TitleInput
          type="title"
          placeholder="제목"
          value={title}
          onChange={handleTitleChange}
        ></TitleInput>
        <ImgSection>
          <PreviewImg src={previewImg} />
          <ImgLabel htmlFor="imageInput">이미지 업로드</ImgLabel>
          <ImgInput
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            id="imageInput"
            onChange={(e) => insertImg(e)}
          />
        </ImgSection>
        <Text>키워드를 최대 2개 골라주세요.</Text>
        <KeywordWrapper>
          {keywords.map((keyword) => (
            <Keyword
              key={keyword}
              selected={selectedKeywords.includes(keyword)}
              onClick={() => handleKeywordClick(keyword)}
            >
              {keyword}
            </Keyword>
          ))}
        </KeywordWrapper>
        <ContentInput
          type="content"
          placeholder="교환학생 꿀팁을 자유롭게 적어주세요."
          value={content}
          onChange={handleContentChange}
        ></ContentInput>
        <SubmitBtn onClick={handleSubmit} type="submit">
          수정하기
        </SubmitBtn>
      </Form>
    </Wrapper>
  );
};

export default EditPostSection;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  min-height: 30px;
  border-radius: 30px;
  border: solid 1px var(--light-gray, #dadada);
`;

const ImgLabel = styled.label`
  padding-bottom: 4%;
  font-weight: bold;
  font-size: 16px;
  color: #0095f6;
  display: inline-block;
  cursor: pointer;
`;

const ImgInput = styled.input`
  display: none;
`;

const PreviewImg = styled.img`
  object-fit: contain;
  max-width: 90%;
  height: auto;
  padding: 4% 1% 1% 1%;
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
  background-color: ${(props) =>
    props.selected ? "var(--l-skyblue, #C5E5F6);" : ""};
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
  min-width: 200px;
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
