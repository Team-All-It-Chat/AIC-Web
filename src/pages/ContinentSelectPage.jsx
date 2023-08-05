import React from "react";
import ContinentSection from "../components/continentSelect/continentSection/ContinentSection";
import ContinentNavBar from "../components/continentSelect/header/ContinentNavBar";

const ContinentSelectPage = () => {
  return (
    <>
      <ContinentNavBar />
      <ContinentSection />
    </>
  );
};

export default ContinentSelectPage;
