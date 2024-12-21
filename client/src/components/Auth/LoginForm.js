import { TextField, Button, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import
import { login } from '../../api/auth';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Use useNavigate instead of useHistory

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await login({ email, password });
        if (user) {
            navigate('/home');  // Updated navigation
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                margin: 'auto',
                paddingTop: '50px'
            }}
        >
            <Typography variant="h4" gutterBottom>Login</Typography>
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} fullWidth
                sx={{ marginBottom: '10px' }} />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} fullWidth
                sx={{ marginBottom: '10px' }} />
            <Button variant="contained" onClick={handleSubmit} sx={{ marginTop: '10px' }}>
                Login
            </Button>
        </Box>
    );
};

export default LoginForm;
