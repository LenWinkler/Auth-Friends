import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handlePassChange = e => {
        setPass(e.target.value);
    }

    const login = e => {
        e.preventDefault();
        console.log(name)
      
        axiosWithAuth()
            .post('/api/login', {username: name, password: pass})
            .then(res => {
                localStorage.setItem('token', res.data.payload);
            }) 
            .catch(err => console.log(err.response));
    }


    return (
        <form onSubmit={login}>
            <input type="text" name={name} onChange={handleNameChange} placeholder="Username" />
            <input type="password" name={pass} onChange={handlePassChange} placeholder="Password" />
            <button>Login</button>
        </form>
    )
}

export default Login;