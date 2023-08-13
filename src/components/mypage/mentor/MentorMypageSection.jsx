import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const MentorMypageSection = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [modal, setModal] = useState();

  useEffect(() => {
    if (pathname.includes("chats")) {
      setModal(0);
    } else if (pathname.includes("posts")) {
      setModal(1);
    }
  }, [pathname]);

  return (
    <Wrapper>
      <SubWrapper>
        <BackImg />
        <ProfileSection>
          <ProfileCircle>
            <ProfileImg src="/img/china_cut_ori.png" />
          </ProfileCircle>
          <UserTitle>오동동 &gt;</UserTitle>
        </ProfileSection>
        <MypageBox>
          <MenuBtnWrapper>
            <MenuButton
              clicked={modal === 0}
              onClick={() => navigate(`/myPageMentor/chats`)}
            >
              💬 오리챗 관리
            </MenuButton>
            <MenuButton
              clicked={modal === 1}
              onClick={() => navigate(`/myPageMentor/posts`)}
            >
              ⭐️ 게시글 관리
            </MenuButton>
          </MenuBtnWrapper>
          <ModalDom>
            <Outlet />
          </ModalDom>
        </MypageBox>
      </SubWrapper>
    </Wrapper>
  );
};

export default MentorMypageSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  min-height: 95vh;
`;

const BackImg = styled.div`
  position: absolute;
  top: 0%;
  background-color: #c5e5f6;
  background-image: url('/img/mypageBanner.png');
  background-repeat: repeat-x;
  height: 500px;
  width: 100%;
  z-index: -1;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-width: 500px;
  height: fit-content;
  min-height: 600px;
  margin-top: 2%;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  padding: 2%;
`;

const ProfileCircle = styled.div`
  height: 150px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: solid 3px var(--m-skyblue, #89cdf6);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ProfileImg = styled.img`
  width: 90%;
  height: 80%;
  margin-top: 21%;
  object-fit: contain;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
`;

const UserTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 1.5%;
`;

const MypageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  width: 80%;
  height: fit-content;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 3% 5% 3% 5%;
  @media (max-width: 1100px) {
    width: 95%;
  }
`;

const MenuBtnWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  width: fit-content;
  height: 45px;
  flex-shrink: 0;
  border-radius: 30px;
  background-color: ${(props) =>
    props.clicked ? "var(--l-skyblue, #C5E5F6);" : ""};
  color: ${(props) => (props.clicked ? "black" : "rgba(0,0,0,0.5);")};
  padding: 0px 2%;
`;

const ModalDom = styled.div`
  margin-top: 2%;
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
`;
