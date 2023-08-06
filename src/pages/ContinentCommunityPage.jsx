import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import CommunityNavBar from "../components/community/CommunityNavBar";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const ContinentCommunityPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [modal, setModal] = useState();
  const { continent } = useParams();

  useEffect(() => {
    if (pathname.includes("mentor")) {
      setModal(0);
    } else if (pathname.includes("tips")) {
      setModal(1);
    }
  }, [pathname]);

  return (
    <>
      <CommunityNavBar />
      <SectionWrapper>
        <MenuDom>
          <Title>{continent}</Title>
          <Line src="/img/line.png" />
          <SearchWrapper>
            <MenuBtnWrapper>
              <MenuButton
                clicked={modal === 0}
                onClick={() => navigate(`/community/${continent}/mentor`)}
              >
                💁🏻‍♂️ 멘토
              </MenuButton>
              <MenuButton
                clicked={modal === 1}
                onClick={() => navigate(`/community/${continent}/tips`)}
              >
                🍯 꿀팁
              </MenuButton>
            </MenuBtnWrapper>
            <Search>
              <SearchImg src="/img/zoom-out.svg" />
              <SearchInput
                type="text"
                placeholder="나라, 학교 등을 검색해덕!"
              />
            </Search>
          </SearchWrapper>
        </MenuDom>
        <ModalDom>
          <Outlet />
        </ModalDom>
      </SectionWrapper>
    </>
  );
};

export default ContinentCommunityPage;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 17vh;
  margin-top: 3%;
`;

const ModalDom = styled.div`
  margin-top: 2%;
  display: flex;
  width: 80%;
  height: 40vh;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 3.3rem;
  font-weight: 600;
  margin-bottom: 1.1rem;
`;

const Line = styled.img`
  width: 100%;
  height: 1px;
  margin-bottom: 1.8rem;
  bottom: 0;
`;

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuBtnWrapper = styled.div`
  display: flex;
`;

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  width: 10%;
  min-width: 90px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 30px;
  background-color: ${(props) =>
    props.clicked ? "var(--l-skyblue, #C5E5F6);" : "white"};
  opacity: ${(props) => (props.clicked ? "100%" : "55%")};
`;

const Search = styled.div`
  width: 30%;
  min-width: 200px;
  height: 45px;
  border-radius: 30px;
  border: 1px solid var(--gray, #888);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4%;
`;

const SearchImg = styled.img`
  width: 20px;
`;

const SearchInput = styled.input`
  width: 75%;
  height: 100%;
  border: 1px white;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;
