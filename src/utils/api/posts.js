import axios from "axios";

export default {
  get: () => axios.get('./../../../public/posts.json')
};