import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import CommunityNavBar from "../../components/community/CommunityNavBar";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { continentAtom } from "../../recoil/atoms";
import { useForm } from "../../hooks/useForm";
// 커뮤니티 페이지
const ContinentCommunityPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [modal, setModal] = useState();
  const { continent } = useParams();
  const setContinentAtom = useSetRecoilState(continentAtom);
  const [keyword, onChangeKeyword] = useForm();
  const location = useLocation();

  useEffect(() => {
    if (pathname.includes("mentor")) {
      setModal(0);
    } else if (pathname.includes("tips")) {
      setModal(1);
    }
    setContinentAtom(continent);
    // console.log(continent);
  }, [pathname, continent, setContinentAtom]);

  const searchKeyword = () => {
    const searchParams = new URLSearchParams(location.search);

    // 현재 쿼리스트링 삭제
    searchParams.delete("search");

    if (keyword) {
      // 검색어가 입력되었다면 새로운 검색어 추가
      searchParams.set("search", keyword);
    }

    const newSearch = searchParams.toString();
    const newPath = newSearch
      ? `${location.pathname}?${newSearch}`
      : location.pathname;

    navigate(newPath);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      searchKeyword();
    }
  };

  return (
    <>
      <CommunityNavBar />
      <SectionWrapper>
        <MenuDom>
          <Title>{continent}</Title>
          <Line />
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
              <SearchImg onClick={searchKeyword} src="/img/zoom-out.svg" />
              <SearchInput
                type="text"
                placeholder="나라를 검색해덕!"
                value={keyword}
                onChange={onChangeKeyword}
                onKeyUp={handleOnKeyPress}
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
  justify-content: center;
  width: 100%;
  height: fit-content;
`;

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: fit-content;
`;

const ModalDom = styled.div`
  margin-top: 2%;
  display: flex;
  width: 80%;
  height: fit-content;
  justify-content: center;
  margin-bottom: 4%;
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
  background-color: black;
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
    props.clicked ? "var(--l-skyblue, #C5E5F6);" : ""};
  color: ${(props) => (props.clicked ? "black" : "rgba(0,0,0,0.5);")};
  cursor: pointer;
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
  cursor: pointer;
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
