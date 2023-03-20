// import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3/";
// const API_KEY_PARAM = "api_key=008d54c941e070f8293dda88fa58b0e8";
// export class TVShowAPI {
//   static async fetchPopulars() {
//     let response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
//     console.log(response.data.results);
//     return response.data.results;
//   }
// }
import { BASE_URL, API_KEY_PARAM } from "../confige";
import axios from "axios";
import { Fake_Popular, Fake_Recommendation } from "./fakedata";

export class TVShowAPI {
  static async fetchPopulars() {
    let response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);

    return response.data.results;
  }

  static async fetchRecommendations(tvShowId) {
    let response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    );

    return response.data.results;
  }
  static async fetchByTitle(title) {
    let response = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
    );

    return response.data.results;
  }
}
