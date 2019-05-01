import axios from "../config";

export default {
  index: (config = {}) => axios.get(`/genre/movie/list`, config)
};
