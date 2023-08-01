import axios from "axios";
//set config default when creatign the instance
const axiosInstance = axios.create({
  baseURL:'http://localhost:4000',
  withCredentials:false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
});

export default axiosInstance;