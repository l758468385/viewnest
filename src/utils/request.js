
import axios from "axios";

// 创建一个 Axios 实例
const axiosInstance = axios.create({
  // baseUrl: 'http:/198.46.251.162:3000', // 设置基础URL
  timeout: 10000, // 设置超时时间
});

axiosInstance.defaults.baseURL = process.env.NODE_ENV === 'production' ? "http:/198.46.251.162:3000" : ''
// 跨域请求，允许保存cookie
axiosInstance.defaults.withCredentials = true
// 添加请求拦截器
axiosInstance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    console.log('Request Interceptor:', config);
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    console.log('Response Interceptor:', response);
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance