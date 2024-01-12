import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './container/AuthContext';
import WellcomePage from "./container/wellcomePage";
import SignupPage from "./container/singUp";
import AuthRoute from "./container/AuthRoute";
import { redirect as Redirect } from 'react-router-dom';



function App() {
  const authContextData = {
    //Данные аутентификации
  };

  return (
    <AuthContext >
      {/* value={authContextData} */}
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <WellcomePage />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <SignupPage />
              </AuthRoute>
            }
          />
        </Routes>
      
    </AuthContext>
  );
}

export default App;
