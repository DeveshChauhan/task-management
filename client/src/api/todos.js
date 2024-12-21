import apiClient from '../utils/interceptor';

export const getTodos = async () => {
    try {
        const response = await apiClient.get('/todos');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const addTodo = async (todo) => {
    try {
        const response = await apiClient.post('/todos', todo);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const deleteTodo = async (id) => {
    try {
        const response = await apiClient.delete(`/todos/${id}`);
        return response.status === 200;
    } catch (error) {
        console.error(error);
    }
};
