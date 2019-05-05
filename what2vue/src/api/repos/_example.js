import axios from "../config";

const resource = "/your/";

function index(config = {}) {
  return axios.get(resource, config);
}

function store(payload, config = {}) {
  return axios.post(resource, payload, config);
}

function show(id, config = {}) {
  return axios.get(resource + id, config);
}

function update(payload, config = {}) {
  return axios.put(resource, payload, config);
}

function destroy(id, config = {}) {
  return axios.delete(resource + id, config);
}

export default {
  index,
  store,
  show,
  update,
  destroy
};
