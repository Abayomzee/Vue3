import axios from "axios";

let apiClient = new axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
      Accept: 'Application/json',
      'Content-Type': 'Application/json'
  }
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },

  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
