import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer WKMP4QJGoAYvZCMe5eL5ktADE1I1CPwZu5c_lYTSVcVonlBUKNjCbbTLMM7RbB-72m2YjTgdz4wHBfZm9Wog-HE_q6klCSaFfOB6i8LL4lw4sQbZ273m9pghI9RcX3Yx'
  }
});
