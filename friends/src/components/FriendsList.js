import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';


const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err.response))
    }, [])

    return (
        <div>
        {friends.map(item => (
            <Friend key={item.id} name={item.name} age={item.age} email={item.email}/>
        ))}
        </div>
    )
}

export default FriendsList;