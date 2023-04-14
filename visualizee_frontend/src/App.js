import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
//import { gapi } from 'gapi-script';

import Login from './components/Login';
import Home from './container/Home';

const App = () => {
 
  return (
    <GoogleOAuthProvider clientId= "818518679912-d6rk6as2nocnh6f63cco0i1u3dm0nkh4.apps.googleusercontent.com">
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;
