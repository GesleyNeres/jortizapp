import axios from 'axios'

const http = axios.create(
    {
        baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    }
);

http.interceptors.request.use(async (config) => {
    
    try {
        console.log("Intercep Request ", config)
        return config;
    } catch (error) {
        console.log("Intercep Request error", error)
        console.log('Error in http/index.js interceptor request');
        return false;
    }

})

http.interceptors.response.use(async (response)=>{
    try {
        console.log("Intercep Response ", response)
        return response.data
    } catch (error) {
        console.log("Intercep Response error", error)
        console.log("Error in http/index.js interceptor response")
        return false
    }
})

const setBearerToken = token => {
    http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export { http , setBearerToken }