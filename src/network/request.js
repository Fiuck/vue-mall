import axios from 'axios'

/**
 * 简易封装的axios
 * @param {*} config 
 */
export function request(config){
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 4000
    });

    instance.interceptors.request.use(config => {
        return config;
    }, err => {

    });

    instance.interceptors.response.use(response => {
        return response.data;
    }, err => {

    });
    
    return instance(config);
}