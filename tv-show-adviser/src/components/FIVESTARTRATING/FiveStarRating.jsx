import React from "react";
import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export default function FiveStarRating({ rating }) {
  const starList = [];

  const starFillCount = Math.round(rating);
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={`starfill ${i}`} />);
  }
  if (hasHalfStar) {
    starList.push(<StarHalf key={`starhalf`} />);
  }
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={`starempty ${i}`} />);
  }

  return <div>{starList}</div>;
}
