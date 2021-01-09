import axios from "axios";

export const axiosCookie = axios.create();
axiosCookie.interceptors.request.use(request => (request.withCredentials = true, request))

export const URL = "http://localhost:61088/api/"

export const URL_USER = URL + "user/"
export const URL_BOARD = URL + "board/"
export const URL_COLUMN = URL + "column/"
export const URL_TASK = URL + "task/"