import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api/users',
});

export const login = async ({ email, password }) => {
    try {
        const response = await apiClient.post('/login', { email, password });
        localStorage.setItem('jwtToken', response?.data?.token)
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const register = async ({ ...params }) => {
    try {
        const response = await apiClient.post('/register', { ...params });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
