import axios from 'axios';

class Rest{
    static post(url, data, func){
        return axios.post(url, data,{headers: {'Content-Type': 'application/json'}}).then(res => func(res));
    }

    static put(url, data, func){
        return axios.put(url, data,{headers: {'Content-Type': 'application/json'}}).then(res => func(res));
    }

    static delete(url, func){
        return axios.delete(url).then(res => func(res));
    }

    static get(url, func){
        return axios.get(url).then(res => func(res));
    }

    static isArrayNoEmpty(arr){
        return Array.isArray(arr) && arr.length !== 0;
    }
}

export default Rest;