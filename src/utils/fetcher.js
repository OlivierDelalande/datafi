import axios from 'axios';

export const fetchCac = (url) => {
    return axios.get(url)
    .then((res) => res.data);
}