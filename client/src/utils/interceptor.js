// axiosInterceptor.js

import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Add a request interceptor to include the JWT token in the Authorization header
apiClient.interceptors.request.use(
    (config) => {
        // Retrieve the token from local storage or another secure storage
        const token = localStorage.getItem('jwtToken'); // Adjust this line as per your storage mechanism

        // If a token exists, add it to the headers
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config; // Pass the modified config object
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

export default apiClient;
