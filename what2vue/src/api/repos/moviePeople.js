import axios from "../config";

export default {
  index: (config = {}) => id => axios.get(`/movie/${id}/credits`, config)
};
