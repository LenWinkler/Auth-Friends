import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      Friends App
      <Route path='/' component={Login} />
    </div>
  );
}

export default App;
