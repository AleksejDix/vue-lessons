import Api from "./api";

const api = new Api({
  version: 3,
  endpoint: "https://api.themoviedb.org",
  key: "9358e80dc961363e5396315291294f14"
});

export default api;
