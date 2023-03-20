import React from "react";
import FiveStarRating from "../FIVESTARTRATING/FiveStarRating";
import s from "./style.module.css";

export default function TvShowDetail({ tvshow }) {
  const rating = tvshow.vote_average / 2;
  return (
    <div>
      <div className={s.title}>{tvshow.name}</div>
      <div className={s.rating_conatiner}>
        <FiveStarRating rating={rating} />
        <span className={s.rating}>{rating}/5</span>
      </div>
      <div className={s.overview}>{tvshow.overview}</div>
    </div>
  );
}
