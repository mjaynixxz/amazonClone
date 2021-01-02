import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-eclone-c2621.cloudfunctions.net/api", //firebase cloud function api url
});
//
export default instance;

// "http://localhost:5001/eclone-c2621/us-central1/api"
