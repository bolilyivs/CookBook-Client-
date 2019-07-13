import axios from 'axios';


class RestManager{
    constructor(){
        this.account = false

        this.baseUrl = "http://localhost:8080"
        this.url = this.baseUrl
        this.data = {}
        this.errorHandler = (err) => (console.log(`error: ${err}`));
        this.successHandler = (res) => (console.log(`Sucess! : ${res}`));

    }

    ///////////////////////////////////

    setAccount(account){
        this.account = account;
        return this;
    }

    setUrl(url){
        this.url = url;
        return this;
    }

    setData(data){
        this.data = data;
        return this;
    }

    setSuccessHandler(handler){
        this.successHandler = handler;
        return this;
    }

    setErrorHandler(handler){
        this.errorHandler  = handler;
        return this;
    }

    getHeaders(){
        let param = { 
            headers: {
                'Content-Type': 'application/json',
            },
        }

        if(this.account){
            param = { 
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Basic ' + btoa(this.account.username + ":" + this.account.password),
                },
            }
        }

        
        return param
    }

    post(){
        return axios.post(this.url, this.data, this.getHeaders()).then(this.successHandler).catch(this.errorHandler);
    }

    put(){

        return axios.put(this.url, this.data, this.getHeaders()).then(this.successHandler).catch(this.errorHandler);
    }

    delete(){
        console.log(this.url, this.getHeaders())
        return axios.delete(this.url, this.getHeaders()).then(this.successHandler).catch(this.errorHandler);
    }

    get(){
        return axios.get(this.url, this.getHeaders()).then(this.successHandler).catch(this.errorHandler);
    }


}

export default RestManager;