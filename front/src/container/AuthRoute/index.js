import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'; 
import { AuthContext } from './container/AuthContext';


export default function AuthRoute({ children }) {
  const { state } = useContext(AuthContext);

  if (state.token) {
    return children;
  } else {
    return <Redirect to="/signup" />;
  }
}
