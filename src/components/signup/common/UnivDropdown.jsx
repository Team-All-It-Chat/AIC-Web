import React, { useState } from "react";
import { styled } from "styled-components";

const UnivDropdown = () => {
  const [selectedUniversity, setSelectedUniversity] = useState("");

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
  };

  return (
    <>
      <UnivSelect
        id="university"
        name="university"
        value={selectedUniversity}
        onChange={handleUniversityChange}
      >
        <option value="">대학교를 선택해주세요!</option>
        <option value="중앙대">중앙대</option>
        <option value="서울대">서울대</option>
        <option value="한양대">한양대</option>
        <option value="건국대">건국대</option>
      </UnivSelect>
    </>
  );
};

export default UnivDropdown;

const UnivSelect = styled.select`
  width: 270px;
  height: 38px;
  font-size: 14px;
  border-radius: 8px;
`;
