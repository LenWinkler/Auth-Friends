import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/Login";
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <h1>Friends App</h1>
      <Route exact path='/' component={Login} />
      <PrivateRoute path='/friends-list' component={FriendsList} />
    </div>
  );
}

export default App;
