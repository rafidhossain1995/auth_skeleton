import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AuthProvider from "./providers/AuthProviders"

function App() {
  return (
    <div className="App">
    <AuthProvider>
     <NavBar />
     <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/users" >
          <Users />
        </Route>
        <Route path="/signup" >
          <SignUp />
        </Route>
        <Route path="/login" >
          <Login />
        </Route>
     </Switch>
     </AuthProvider>
    </div>
  );
}

export default App;
