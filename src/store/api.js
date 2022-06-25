import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/geographic" });

export const createMap = (mapData) => API.post("/map", mapData);