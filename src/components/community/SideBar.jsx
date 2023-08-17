import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { continentAtom, isMentorAtom } from "../../recoil/atoms";
import { menteeLogout, mentorLogout } from "../../apis/accounts";

const SideMenu = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const continent = useRecoilValue(continentAtom);
  const sideMenuContainerRef = useRef(null);
  const sideMenuBGRef = useRef(null);
  const menuListRef = useRef(null);
  const isMentor = useRecoilValue(isMentorAtom);

  const mypageBtnHandle = () => {
    if (isMentor) {
      navigate("/mypageMentor/chats");
    } else {
      navigate("/mypageMentee/chats");
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!sideMenuContainerRef || !sideMenuContainerRef.current) return;
    if (!menuListRef || !menuListRef.current) return;
    if (!sideMenuBGRef || !sideMenuBGRef.current) return;

    sideMenuContainerRef.current.style.visibility = isMenuOpen
      ? "visible"
      : "hidden";
    sideMenuBGRef.current.style.opacity = isMenuOpen ? "1" : "0";
    menuListRef.current.style.opacity = isMenuOpen ? "1" : "0";
    menuListRef.current.style.transform = `translateX(${
      isMenuOpen ? 0 : 1
    }00%)`;
  }, [isMenuOpen]);

  const BtnHandle = (type) => {
    if (type === "대륙선택") {
      setIsMenuOpen(false);
      navigate(`/continentSelect`);
    } else if (type === "꿀팁") {
      navigate(`/community/${continent}/tips`);
    } else if (type === "멘토") {
      navigate(`/community/${continent}/mentor`);
    } else if (type === "로그아웃") {
      if (isMentor) {
        mentorLogout();
      } else {
        menteeLogout();
      }
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      navigate(`/`);
    }
    setIsMenuOpen(false);
  };

  const SettingBtnHandle = () => {
    if (isMentor) {
      navigate("/mentorSetting");
    } else {
      navigate("/menteeSetting");
    }
  };

  return (
    <>
      <HamburgerBtn
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        src="/img/menu.svg"
      />
      <SideMenuContainer ref={sideMenuContainerRef}>
        <SideMenuBG
          isMenuOpen={isMenuOpen}
          ref={sideMenuBGRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></SideMenuBG>
        <CategorySection ref={menuListRef}>
          <BtnSeciton>
            <Btn src="/img/x.svg" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </BtnSeciton>
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
            <Title onClick={mypageBtnHandle}>마이페이지</Title>
            <Line />
          </Category>
          <Category>
            <Title onClick={SettingBtnHandle}>설정</Title>
            <Line />
          </Category>
          <Category>
            <Title onClick={() => BtnHandle("로그아웃")}>로그아웃</Title>
            <Line />
          </Category>
        </CategorySection>
      </SideMenuContainer>
    </>
  );
};

export default SideMenu;

const HamburgerBtn = styled.img`
  all: unset;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SideMenuContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: transparent;
  visibility: hidden;
`;

const SideMenuBG = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(196, 196, 196, 0.5);
  transition: all 0.5s ease-out;
`;

const CategorySection = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  font-weight: 500;
  border-radius: 20px 0px 20px 20px;
  height: 100%;
  width: 20%;
  min-width: 22rem;
  padding: 1rem 3rem;
  gap: 30px;
  transition: all 0.8s ease-out;
`;

const BtnSeciton = styled.div`
  width: 100%;
  height: 9%;
  min-height: 64px;
  display: flex;
  align-items: center;
`;

const Btn = styled.img`
  cursor: pointer;
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
