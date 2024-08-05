import axios from "axios";

const axiosParam = {
  baseURL: "http://localhost:8080",
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
}

const axiosInstance = axios.create(axiosParam);

const api = (instance) => {
  return {
    get: (url) => instance.get(url),
    post: (url, data) => instance.post(url, data),
    put: (url, data) => instance.put(url, data),
    delete: (url) => instance.delete(url),
    patch: (url, data) => instance.patch(url, data)
  }
}

export default api(axiosInstance);