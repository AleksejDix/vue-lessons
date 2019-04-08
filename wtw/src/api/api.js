export default class API {
  constructor(options = {}) {
    this.endpoint = options.endpoint;
    this.key = options.key;
    this.v = options.version;
  }

  query(value) {
    const data = {
      api_key: this.key
    };
    const searchParams = new URLSearchParams(data);
    const params = searchParams.toString();
    const url = new URL(`${this.v}/${value}?${params}`, this.endpoint);
    return url.href;
  }

  async get(query) {
    try {
      const response = await fetch(this.query(query));
      return await response.json();
    } catch (error) {
      return error;
    }
  }
}
