import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d642ed874e09bbe8a5a1e2cde86d1f005d2f1877d5df4d44f8783d4294736a48"
  }
});
