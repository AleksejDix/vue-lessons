import axios from '@/api/config'

const resource = '/your/'

export default {
  index: (config = {}) => axios.get(resource, config),

  store: (payload, config = {}) => axios.post(resource, payload, config),

  show: (id, config = {}) => axios.get(resource + id, config),

  update: (payload, config = {}) => axios.put(resource, payload, config),

  destroy: (id, config = {}) => axios.delete(resource + id, config)
}
