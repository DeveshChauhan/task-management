import React, { useState, useEffect } from 'react';
import { getTodos } from '../api/todos';
import AddTodo from '../components/Todos/AddTodo';
import TodoList from '../components/Todos/TodoList';

const Home = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const fetchedTodos = await getTodos();
        setTodos(fetchedTodos);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleTodoAdded = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const handleTodoDeleted = (id) => {
        setTodos(todos.filter((todo) => todo._id !== id));
    };

    return (
        <div>
            <AddTodo onTodoAdded={handleTodoAdded} />
            <TodoList todos={todos} onTodoDeleted={handleTodoDeleted} />
        </div>
    );
};

export default Home;
