import axios from "../config";

export default {
  show: (id, config = {}) => axios.get(`movie/${id}`, config)
};
