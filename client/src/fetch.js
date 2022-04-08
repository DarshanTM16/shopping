import axios from 'axios';

const URL = '';

export const fetchData = async ()=> {
    return await axios.get(`${URL}/getdata`)
};



