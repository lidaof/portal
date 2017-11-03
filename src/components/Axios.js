import axios from 'axios';

axios.defaults.baseURL = 'http://meta.target.wustl.edu/api/';

function search(query, params) {
    return axios.get(query, {
    params: params
  })
}

const Client = { search };
export default Client;
