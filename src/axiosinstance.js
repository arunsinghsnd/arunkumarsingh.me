import axios from "axios";

const instace = axios.create({
  baseURL: "https://arun-app-be8a1.firebaseio.com/",
});

export default instace;
