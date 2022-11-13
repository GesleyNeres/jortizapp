import axios from 'axios'

const http = axios.create(
    {
        baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    }
);

http.interceptors.request.use(async (config) => {
    
    try {
        return config;
    } catch (error) {
        return false;
    }

})

http.interceptors.response.use(async (response)=>{
    try {
        return response.data
    } catch (error) {
        return false
    }
})

const setBearerToken = token => {
    http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export { http , setBearerToken }