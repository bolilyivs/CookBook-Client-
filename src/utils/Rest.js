import axios from 'axios';


function getParams(){
    return{ 
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Basic ' + btoa('user1' + ":" + '123'),
           // withCredentials: true
        },

    }
}


class Rest{
    static post(url, data, func){
        return axios.post(url, data, getParams()).then(res => func(res));
    }

    static put(url, data, func){

        return axios.put(url, data, getParams()).then(res => func(res));
    }

    static delete(url, func){
        return axios.delete(url, getParams()).then(res => func(res));
    }

    static get(url, func){
        return axios.get(url, getParams()).then(res => func(res));
    }

    static isArrayNoEmpty(arr){
        return Array.isArray(arr) && arr.length !== 0;
    }
}

export default Rest;