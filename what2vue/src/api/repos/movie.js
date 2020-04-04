import axios from '@/api/config'

export default {
  show: (id, config = {}) => axios.get(`movie/${id}`, config)
}
