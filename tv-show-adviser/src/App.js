import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";

import logoimage from "./assests/images/logo.png";

import { BACKDROP_BASE_URL } from "./confige";
import TvShowDetail from "./components/TvShowDetail/TvShowDetail";
import Logo from "./components/LOGO/Logo";
// import TVShowListitem from "./components/TVShowListitem/TVShowListitem";
import TVshowList from "./components/TVShowList/TVshowList";
import SearchBar from "./components/SearchBar/SearchBar";
// import TVShowListitem from "./components/TVShowListitem/TVShowListitem";
function App() {
  const [currentTvShow, setCuurentTvShow] = useState();
  const [recommendationList, setRecommendation] = useState([]);
  async function fetchPopulars() {
    try {
      const popularTvShow = await TVShowAPI.fetchPopulars();
      if (popularTvShow.length > 0) {
        setCuurentTvShow(popularTvShow[0]);
      }
    } catch (err) {
      alert("SOMETHING WENT WRONG");
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const recommendationListRespo = await TVShowAPI.fetchRecommendations(
        tvShowId
      );
      if (recommendationListRespo.length > 0) {
        setRecommendation(recommendationListRespo.slice(0, 10));
      }
    } catch (err) {
      alert("SOMETHING WENT WRONG");
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        console.log(searchResponse[0]);
        setCuurentTvShow(searchResponse[0]);
      }
    } catch (err) {
      alert("SOMETHING WENT WRONG");
    }
  }
  useEffect(() => {
    fetchPopulars();
  }, []);
  useEffect(() => {
    if (currentTvShow) {
      fetchRecommendations(currentTvShow.id);
    }
  }, [currentTvShow]);
  console.log(currentTvShow);
  console.log(recommendationList);

  function updateCurrentTVShow(tvShow) {
    setCuurentTvShow(tvShow);
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat  center / cover`
          : "Black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoimage}
              title={"Game Of Thrones"}
              subtitle={"Find the show in Hotstar"}
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTvShow && <TvShowDetail tvshow={currentTvShow} />}
      </div>
      <div className={s.recommended_tv_show}>
        {currentTvShow && (
          <TVshowList
            onClickItems={updateCurrentTVShow}
            tvshowlist={recommendationList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
