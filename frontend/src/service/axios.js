import axios from 'axios';
import { getToken } from './auth';

class BaseService {
  constructor() {
    this.baseUrl = 'http://localhost:8082'
  }

  getServer = async path => {
    const url = `${this.baseUrl}${path}`;
    const response = await axios.get(url)
      .catch(error => console.log('[AXIOS] ERROR ' + error));

    return response;
  }

  postUsuario = async (body) => {
    const url = `${this.baseUrl}/usuarios`;
    const response = await axios.post(url, body)
      .catch(error => console.log('[POST USUARIO ERROR] ' + error));

    return response;
  }

  login = async (body) => {
    const url = `${this.baseUrl}/login`;
    const response = await axios.post(url, body)
      .catch(error => console.log('[LOGIN ERROR] ' + error));

    return response;
  }

  addUsuarioDestino = async (body) => {
    const url = `${this.baseUrl}/usuarios/ondefui`;
    console.log("TOKEN: ", getToken());
    const response = await axios.post(url, body, {
      headers: {
        'x-auth-token': getToken(),
      }
    })
      .catch(error => console.log('[ADD USUARIO DESTIONO ERROR] ' + error))
    return response;
  }

}

export default (new BaseService());

// const instance = axios.create({
//   baseURL: 'http://localhost:8082'
// });

// export default instance;
