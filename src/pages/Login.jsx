import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // const response = await axios.post(' http://172.16.209.1:9000/api/signin/login', {username: 'testuser',
            //     password: 'password' }, { withCredentials: true });
                 const response = await axios.post(' http://localhost:9000/api/signin/login', {username: 'testuser',
                     password: 'password' }, { withCredentials: true });
            if (response.data.token) {
                navigate('/page1');
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
