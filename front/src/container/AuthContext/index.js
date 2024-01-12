import React, { createContext, useReducer, useContext } from 'react';



const AuthProvider = createContext();

const initialState = {
  token: null,
  user: null,
};

const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (token, user) => {
    dispatch({ type: actionTypes.LOGIN, payload: { token, user } });
  };

  const logout = () => {
    dispatch({ type: actionTypes.LOGOUT });
  };

  const contextValue = {
    state,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
 
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};