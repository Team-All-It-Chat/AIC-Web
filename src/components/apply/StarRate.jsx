import React, { useState } from "react";
import styled from "styled-components";

const StarRating = ({ onChange }) => {
  const [rate, setRate] = useState(0);

  const handleStarClick = (select) => {
    setRate(select);
    onChange(select);
  };

  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={star <= rate}
          onClick={() => handleStarClick(star)}
        >
          ★
        </Star>
      ))}
    </StarContainer>
  );
};

export default StarRating;

const StarContainer = styled.div`
  display: inline-block;
`;

const Star = styled.span`
  font-size: 24px;
  color: ${({ filled }) => (filled ? "gold" : "lightgray")};
  cursor: pointer;
`;
