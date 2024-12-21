import { TextField, Button, Box, Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';
import { addTodo } from '../../api/todos';

const AddTodo = ({ onTodoAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleAddTodo = async () => {
        const newTodo = await addTodo({ title, description, completed });
        if (newTodo) {
            onTodoAdded(newTodo);
            setTitle('');
            setDescription('');
            setCompleted(false);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                margin: 'auto',
                paddingTop: '20px'
            }}
        >
            <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                required
            />
            <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                multiline
                rows={4}
                sx={{ marginTop: '10px' }}
            />
            <FormControlLabel
                control={<Checkbox checked={completed} onChange={(e) => setCompleted(e.target.checked)} />}
                label="Completed"
                sx={{ marginTop: '10px' }}
            />
            <Button variant="contained" onClick={handleAddTodo} sx={{ marginTop: '10px' }}>
                Add Todo
            </Button>
        </Box>
    );
};

export default AddTodo;
