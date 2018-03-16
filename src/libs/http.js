import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export function getTodos() {
  return axios.get(baseUrl+"/todos");
}
