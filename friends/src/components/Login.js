import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Login = props => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handlePassChange = e => {
        setPass(e.target.value);
    }

    const login = e => {
        setIsVisible(true) // doesn't work. placement?
      
        axiosWithAuth()
            .post('/api/login', {username: name, password: pass})
            
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends-list');
            }) 
            .catch(err => console.log(err.response));
        
        
        e.preventDefault();
        setName('');
        setPass('');

        setIsVisible(false);  // doesn't work. placement?
    }


    return (
        <form onSubmit={login}>
            <input type="text" value={name} name={name} onChange={handleNameChange} placeholder="Username" />
            <input type="password" value={pass} name={pass} onChange={handlePassChange} placeholder="Password" />
            <button>Login</button>
            <Loader 
                type="Bars"
                color="#0000FF"
                height={15}
                width={15}
                visible={isVisible}
            />
        </form>
    )
}

export default Login;