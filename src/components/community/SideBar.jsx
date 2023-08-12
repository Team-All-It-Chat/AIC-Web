import React, { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SideBar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const sidebar = useRef(); //외부 클릭시 사이드바 닫기를 위한 변수

  const sidebarCloseHandler = useCallback(({ target }) => {
    if (isOpen && !sidebar.current.contains(target)) {
      setIsOpen(false);
    }
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    window.addEventListener("mousedown", sidebarCloseHandler);
    return () => {
      window.removeEventListener("mousedown", sidebarCloseHandler);
    };
  }, [sidebarCloseHandler]);

  const BtnHandle = (continent) => {
    setIsOpen(false);
    if (continent === "멘토마이페이지") {
      navigate(`/mypageMentor/chats`);
    } else if (continent === "멘티마이페이지") {
      navigate(`/mypageMentee/chats`);
    } else if (continent === "대륙선택") {
      navigate(`/continentSelect`);
    } else if (continent === "꿀팁") {
      navigate(`/community/아시아/tips`);
    } else {
      navigate(`/community/아시아/mentor`);
    }
  };

  return (
    <Wrapper>
      <DarkSection />
      <SideBarWrapper ref={sidebar}>
        <BtnSection>
          <Btn src="/img/x.svg" onClick={() => setIsOpen(false)} />
        </BtnSection>
        <CategorySection>
          <Category>
            <Title onClick={() => BtnHandle("대륙선택")}>대륙 선택</Title>
            <Line />
          </Category>
          <Category>
            <Title onClick={() => BtnHandle("멘토")}>멘토 탐색</Title>
            <Line />
          </Category>
          <Category>
            <Title onClick={() => BtnHandle("꿀팁")}>꿀팁 보기</Title>
            <Line />
          </Category>
          <Category>
            <Title>설정</Title>
            <Line />
          </Category>
          <Category>
            <Title>로그아웃</Title>
            <Line />
          </Category>
          <Category>
            <Title onClick={() => BtnHandle("멘토마이페이지")}>
              멘토 마이페이지(테스트)
            </Title>
            <Line />
          </Category>
          <Category>
            <Title onClick={() => BtnHandle("멘티마이페이지")}>
              멘티 마이페이지(테스트)
            </Title>
            <Line />
          </Category>
        </CategorySection>
      </SideBarWrapper>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
`;

const DarkSection = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 4;
  background-color: #000000;
  opacity: 45%;
`;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  z-index: 999;
  box-shadow: -4px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px 0px 0px 20px;
`;

const BtnSection = styled.div`
  width: 100%;
  height: 9%;
  min-height: 64px;
  display: flex;
  align-items: center;
`;

const Btn = styled.img`
  padding-left: 5%;
  cursor: pointer;
`;

const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  margin-top: 7%;
  gap: 30px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 630;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
`;

