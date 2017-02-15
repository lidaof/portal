import axios from 'axios';

axios.defaults.baseURL = 'http://target.wustl.edu:8006/api/';

function search(query, params) {
    return axios.get(query, {
    params: params
  })
}

const Client = { search };
export default Client;
