import { Box } from '@chakra-ui/react';
import React from 'react';
import LayoutHOC from '../Components/HOC/Layout.HOC';
import HeroImage from '../../../public/Images/hero1.jpg';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  console.log('state - ', location.state);
  
  return (
    <>
      <LayoutHOC
        title='Take Your Carrier To The Next Level.'
        body='Learn from the best minds in the industry and make yourself ready for the real world of Product Management.'
        img={HeroImage}
        onClickFunction={() => window.alert('button Clicked from home')}
        button='Take a Test'
      />
      <Box
        mt={'2rem'}
        w={'95vw'}
        h={'200px'}
        mx={'auto'}
        color={'white'}
        bgColor={'white'}
        zIndex={'2'}
        position={'relative'}
      />
    </>
  );
};

export default Home;
