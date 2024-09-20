import axios from "axios";
import { REGISTER_API, LOGIN_API } from "../Helper/Constant";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});


export const postRegister = async (data) => API.post(`${REGISTER_API}`, data);

export const postLogin = async (data) => API.post(`${LOGIN_API}`, data);
