import axios from '@/api/config'

export default {
  index: (config = {}) => id => axios.get(`/movie/${id}/credits`, config)
}
