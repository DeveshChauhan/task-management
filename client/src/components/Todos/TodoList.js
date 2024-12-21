import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardContent, Typography, Checkbox, IconButton, Grid, FormControlLabel } from '@mui/material';
import React from 'react';
import { deleteTodo } from '../../api/todos';

const TodoList = ({ todos, onTodoDeleted }) => {

    const handleTodoDeleted = async (id) => {
        const deleted = await deleteTodo(id);
        if (deleted) {
            onTodoDeleted(id);
        }
    };

    return (
        <Grid container spacing={2} sx={{ padding: '20px' }}>
            {todos.map((todo) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={todo._id}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', position: 'relative', height: '100%' }}>
                        {/* Delete Icon Button */}
                        <IconButton
                            onClick={() => handleTodoDeleted(todo._id)}
                            color="error"
                            sx={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                zIndex: 1,
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>

                        {/* Card Content */}
                        <CardContent sx={{ paddingBottom: '16px' }}>
                            <Typography variant="h6" component="div">
                                {todo.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ marginTop: '5px' }}>
                                {todo.description || 'No description provided.'}
                            </Typography>
                            <FormControlLabel
                                control={<Checkbox checked={todo.completed} disabled />}
                                label="Completed"
                                sx={{ marginTop: '10px' }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default TodoList;
