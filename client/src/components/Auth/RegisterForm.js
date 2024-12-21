import { TextField, Button, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import
import { register } from '../../api/auth';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');  // Added state for username
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();  // Use useNavigate instead of useHistory

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        const newUser = await register({ email, username, password });  // Pass username in register function
        if (newUser) {
            navigate('/login');  // Updated navigation
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
            <Typography variant="h4" gutterBottom>Register</Typography>
            <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                sx={{ marginBottom: '10px' }}
            />
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                sx={{ marginBottom: '10px' }}
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                sx={{ marginBottom: '10px' }}
            />
            <TextField
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
                sx={{ marginBottom: '10px' }}
            />
            <Button variant="contained" onClick={handleSubmit} sx={{ marginTop: '10px' }}>
                Register
            </Button>
        </Box>
    );
};

export default RegisterForm;
