import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Theme';
import NavBar from './Components/NavBar/Nav';
import Home from './Pages/Home';
import Course from './Pages/Course';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';

export const newTheme = {
  ...theme,
  shadows: { ...theme.shadows, outline: '0 !important' },
  colors: { ...theme.colors, primary: '#ffffff' },
};
const App = () => {
  // const [name, setName] = useState('Loading...');
  // useEffect(() => {
  //   fetch('/api/getUsername')
  //     .then((res) => res.json())
  //     .then((res) => setName(res.username));
  // });

  return (
    <ChakraProvider theme={newTheme}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate replace to='/course' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/reset-password' element={<ForgotPassword />} />
        {/*     <Route path='/price-list' element={<PriceList />} />
         <Route path='/contact' element={<ContactUS />} />
        <Route path='/book-collection' element={<BookCollection />} />
    <Route path='/terms' element={<Terms />} />
    <Route component={<NotFound />} />*/}
      </Routes>
    </ChakraProvider>
  );
};

export default App;
