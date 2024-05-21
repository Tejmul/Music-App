import React, { useState } from 'react';
import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from 'react-router-dom';
import HomePage from './pages/homePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/signUp';
import Songs from './pages/Songs';




function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState('');

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage isLogin={isLogin} setIsLogin={setIsLogin}/>,
    },
    {
      path: '/signin',
      element: <SignIn setIsLogin={setIsLogin} setToken={setToken}/>,
    },
    {
      path: '/signup',
      element: <SignUp setToken={setToken}/>,
    },
    {
      path: '/song/:id',
      element: isLogin ? <Songs token={token}/> : <Navigate replace to='/signin'/>
    }
    
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
