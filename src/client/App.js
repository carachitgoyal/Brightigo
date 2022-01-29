import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, Center } from '@chakra-ui/react';
import theme from './Theme';
import NavBar from './Components/NavBar/Nav';
import Home from './Pages/Home';
import Course from './Pages/Course';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import Activate from './Pages/Activate';
import Dashboard from './Pages/Dashboard';
import AppState from './Context/userAuth-state';
import { isAuth } from './Helpers/auth';
import Footer from './Components/Footer/Footer';

export const newTheme = {
  ...theme,
  shadows: { ...theme.shadows, outline: '0 !important' },
  colors: { ...theme.colors, primary: '#ffffff' },
};
const App = () => {
  return (
    <AppState>
      <ChakraProvider theme={newTheme}>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={
              isAuth() ? (
                <Navigate replace to='/dashboard' />
              ) : (
                <Navigate replace to='/course' />
              )
            }
          />
          <Route path='/home' element={<Home />} />
          <Route path='/course' element={<Course />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/users/activate/:token' element={<Activate />} />
          <Route
            path='/dashboard'
            element={
              isAuth() ? <Dashboard /> : <Navigate replace to='/login' />
            }
          />
          <Route path='/users/password/forget' element={<ForgotPassword />} />
          <Route
            path='/users/password/reset/:token'
            element={<ResetPassword />}
          />{' '}
          <Route
            path='*'
            element={
              <Center
                fontSize={{ base: '5xl', md: '7xl', lg: '9xl' }}
                h={'60vh'}
                fontWeight={'700'}
                flexDir={'column'}
              >
                404
                <Center fontSize={'2xl'} fontWeight={'400'}>
                  Page Not found
                </Center>
              </Center>
            }
          />
        </Routes>
        <Footer />
      </ChakraProvider>
    </AppState>
  );
};

export default App;
