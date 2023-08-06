import React, { useState } from "react";
import { styled } from "styled-components";

const MajorDropdown = () => {
  const [selectedMajor, setSelectedMajor] = useState("");

  const handleMajorChange = (e) => {
    setSelectedMajor(e.target.value);
  };

  return (
    <>
      <MajorSelect
        id="major"
        name="major"
        value={selectedMajor}
        onChange={handleMajorChange}
      >
        <option value="">전공을 선택해주세요!</option>
        <option value="경영경제">경영경제</option>
        <option value="인문사회">인문사회</option>
        <option value="사범">사범</option>
        <option value="자연과학">자연과학</option>
        <option value="공과">공과</option>
        <option value="의학">의학</option>
        <option value="예술">예술</option>
        <option value="체육">체육</option>
      </MajorSelect>
    </>
  );
};

export default MajorDropdown;

const MajorSelect = styled.select`
  width: 270px;
  height: 38px;
  font-size: 14px;
  border-radius: 8px;
`;
