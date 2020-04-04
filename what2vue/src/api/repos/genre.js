import axios from '@/api/config'

export default {
  index: (config = {}) => axios.get(`/genre/movie/list`, config)
}
