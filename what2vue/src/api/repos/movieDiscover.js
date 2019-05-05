import axios from "../config";

export default {
  index: (config = {}) => {
    const { query } = config;
    const { sort_by, sort_order, page = 1, genres: with_genres } = query;
    const params = {
      sort_by: `${sort_by}.${sort_order}`,
      page,
      with_genres
    };
    return axios.get(`discover/movie`, {
      params
    });
  }
};
