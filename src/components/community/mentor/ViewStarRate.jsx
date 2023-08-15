import React from "react";
import styled from "styled-components";

const ViewStarRate = ({rate}) => {
  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={star <= rate}
        >
          ★
        </Star>
      ))}
    </StarContainer>
  );
};

export default ViewStarRate;

const StarContainer = styled.div`
  display: inline-block;
`;

const Star = styled.span`
  font-size: 17px;
  color: ${({ filled }) => (filled ? "#FFA946" : "lightgray")};
`;
