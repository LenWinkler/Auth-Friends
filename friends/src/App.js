import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/Login";
import FriendsList from './components/FriendsList';


function App() {
  return (
    <div className="App">
      Friends App
      <Route exact path='/' component={Login} />
      <Route path='/friends-list' component={FriendsList} />
    </div>
  );
}

export default App;
