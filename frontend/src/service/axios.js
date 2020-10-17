import axios from 'axios';

class BaseService {
  constructor() {
    this.baseUrl = 'http://localhost:8082'
  }

  getCorpos = async path => {
    let url = `${this.baseUrl}${path}`;
    let response = await axios.get(url)
      .catch(error => console.log('[AXIOS] ERROR ' + error));

    return response;
  }
}

export default (new BaseService());

// const instance = axios.create({
//   baseURL: 'http://localhost:8082'
// });

// export default instance;
