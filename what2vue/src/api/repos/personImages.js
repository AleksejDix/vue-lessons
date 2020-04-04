import axios from '@/api/config'
export default {
  index: (config = {}) => id => axios.get(`/person/${id}/images`, config)
}
