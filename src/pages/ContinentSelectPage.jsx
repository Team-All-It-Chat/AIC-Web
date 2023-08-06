import React from "react";
import ContinentSection from "../components/continentSelect/continentSection/ContinentSection";
import ContinentNavBar from "../components/continentSelect/header/ContinentNavBar";
// 대륙 선택 페이지
const ContinentSelectPage = () => {
  return (
    <>
      <ContinentNavBar />
      <ContinentSection />
    </>
  );
};

export default ContinentSelectPage;
