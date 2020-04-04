import axios from '@/api/config'

export default {
  index: (id, config = {}) => axios.get(`/movie/${id}/credits`, config)
}
