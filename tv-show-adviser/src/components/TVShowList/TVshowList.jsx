import React from "react";
import TVShowListitem from "../TVShowListitem/TVShowListitem";
import s from "./style.module.css";

export default function TVshowList({ tvshowlist, onClickItems }) {
  console.log(tvshowlist);
  return (
    <div>
      <div className={s.title}>You Like Probably</div>
      <div className={s.list}>
        {tvshowlist.map((tvshow, i) => {
          return (
            <span className={s.listitems}>
              <TVShowListitem key={i} tvshow={tvshow} onClick={onClickItems} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
