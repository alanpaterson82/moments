import axios from "axios";

axios.defaults.baseURL = "https://django-rest-ap-9a62d525c1f0.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();