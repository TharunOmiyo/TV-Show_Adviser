import React from "react";
import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../confige";
const MAX_Length = 20;

export default function TVShowListitem({ tvshow, onClick }) {
  const onClick_ = () => {
    onClick(tvshow);
  };

  return (
    <>
      <div className={s.container} onClick={onClick_}>
        <img
          className={s.image}
          src={SMALL_IMG_COVER_BASE_URL + tvshow.backdrop_path}
          alt="IMAGE"
        />
        <div className={s.title}>
          {tvshow.name.slice(0, MAX_Length) + "..."}
        </div>
      </div>
    </>
  );
}
