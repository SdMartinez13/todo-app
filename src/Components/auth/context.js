import React, { useState } from "react";
import cookie from "react-cookies";
import jwt_decode from "jwt-decode";
import axios from 'axios';

export const AuthContext = React.createContext();



const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }

  const login = async (username, password) => {
    let config = {
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/signin',
      method: 'post',
      auth: {
        username,
        password,
      }
    }
    let response = await axios(config);
    // console.log('login information:  ', response.data);
    let { token } = response.data

    if (token) {
      try {
        // validate the token
        _validate(token);
      } catch (e) {
        // maybe set error in state
        console.error(e);
      }
    }
  }

  function _validate(token) {
    try {
      let user = jwt_decode(token);
      if (user) {
        setUser(user);
        setLoggedIn(true);
        cookie.save('auth', token);
      }
    } catch (error) {
      setLoggedIn(false);
      setError(error);
      console.error(error);
    }
  }

  const logout = () => {
    setUser({});
    setLoggedIn(false);
    setError(null);
    cookie.remove('auth');
  };

  let authValues = {
    loggedIn,
    user,
    error,
    login,
    logout,
    can,
  }

  return (
    <AuthContext.Provider value={authValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;