import React, { useState } from 'react';

const Login = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const credentials ={
        username: name,
        password: pass
    }

    const handleNameChange = e => {
        setName({[e.target.name]: e.target.value});
    }

    const handlePassChange = e => {
        setPass({[e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();

    }


    return (
        <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
        </form>
    )
}

export default Login;