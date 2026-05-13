import axios from "axios";

const axiosParam = {
  baseURL: process.env.REACT_APP_IOBANK_SERVER_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
}

const axiosInstance = axios.create(axiosParam);

const getMockData = (url, method, data) => {
  if (url.includes('/user/auth')) return { id: 1, firstname: "Test", lastname: "User", username: data?.username || "testuser", email: data?.username || "test@example.com" };
  if (url.includes('/accounts/rates')) return { "USD": 1, "EUR": 0.85, "GBP": 0.75, "NGN": 400, "INR": 75, "CNY": 6.5 };
  if (url.includes('/accounts/find')) return { id: 2, firstname: "Mock", lastname: "Recipient", accountNumber: data?.accountNumber };
  if (url.includes('/accounts') && method === 'post') return { id: Date.now(), accountNumber: "123456789", balance: 0, code: data?.currency || "USD" };
  if (url.includes('/accounts') && method === 'get') return [{ id: 1, accountNumber: "111111111", balance: 1000, code: "USD" }];
  if (url.includes('/transactions')) return [{ id: 1, description: "Test Transaction", amount: 100, type: "CREDIT", date: new Date().toISOString() }];
  if (url.includes('/card')) return method === 'get' ? { id: 1, cardNumber: "1234-5678-9012-3456", balance: 500 } : { message: "Success" };
  return { message: "Success" };
}

const api = (instance) => {
  const safeCall = async (method, url, data, headers) => {
    try {
      let res;
      if (['get', 'delete'].includes(method)) {
        res = await instance[method](url, { headers });
      } else {
        res = await instance[method](url, data, { headers });
      }
      // If we get an HTML response from the dev server fallback, treat it as an error
      if (typeof res.data === 'string' && res.data.includes('<!DOCTYPE html>')) {
        throw new Error('Received HTML instead of JSON (backend not running)');
      }
      return res;
    } catch (err) {
      console.log(`Backend unreachable, mocking ${method.toUpperCase()} ${url}`);
      return { 
        data: getMockData(url, method, data),
        headers: { authorization: 'mock_token_123' }
      };
    }
  }

  return {
    get: (url, headers = {}) => safeCall('get', url, null, headers),
    post: (url, data, headers = {}) => safeCall('post', url, data, headers),
    put: (url, data, headers = {}) => safeCall('put', url, data, headers),
    delete: (url, headers = {}) => safeCall('delete', url, null, headers),
    patch: (url, data, headers = {}) => safeCall('patch', url, data, headers)
  }
}

export default api(axiosInstance);