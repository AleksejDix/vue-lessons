import axios from '@/api/config'

export default {
  show: (id, config = {}) => {
    const {
      query = {
        page: 1
      }
    } = config

    return axios.get(`movie/${id}`, {
      params: {
        page: query.page
      }
    })
  }
}
