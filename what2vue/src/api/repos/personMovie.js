import axios from '../config'
export default {
  index: (config = {}) => id => axios.get(`/person/${id}/movie_credits`, config)
}