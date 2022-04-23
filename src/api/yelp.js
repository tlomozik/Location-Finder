import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer aFQt49w5z5N7JT89I7lTexAO8dWSrIMgNrnd0L8P828zqrjFri32ZUgtnjZVyH9MY2knVRLxOLVHeyTG8-qR402GzsYx7SkEBYLK3P6CQVUMigohe_NEjCX65xRDYnYx",
  },
});
