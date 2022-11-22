import axios from "axios";
import Cookies from "js-cookie";




const APIRequest = axios.create ({ baseURL: "http://localhost:3000" })


APIRequest.interceptors.request.use(({headers, ...config}) => ({
  ...config,
  headers: {
    ...headers, 
    
    "Content-type": "application/json",
  },
}));



export default class APIManager {
  static async register(data) {
    const addbase = "/users";
    const response = await APIRequest.post( addbase, data);
    return response;
  }

  static async login(data) {
    const addbase = "/users/sign_in"
    const response = await APIRequest.post(addbase, data)
    return response;
  }

  static async logout() {
    const addbase = "/users/sign_out"
    const response = await APIRequest.delete(addbase)
    return response;

  }

  static async getArticles() {
    const addbase = "/articles"
    const response = await APIRequest.get(addbase)
    return response; 
  }
}
