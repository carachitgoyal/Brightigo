import { Box, Center, Text, Heading } from '@chakra-ui/react';
import React from 'react';
import LayoutHOC from '../Components/HOC/Layout.HOC';
import HeroImage from '../../../public/Images/hero1.jpg';
import { useLocation } from 'react-router-dom';
import Testimonials from '../Components/Testimonials/Testimonials';
import HowItWorks from '../Components/Home/HowItWorks';

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
      <Center bg={'white'} w={'full'}>
        <Box maxW={'7xl'} mx={'auto'}>
          <HowItWorks />
        </Box>
      </Center>
      <Box maxW='7xl' mx={'auto'}>
        <Heading
          fontSize={{ base: 'xl', md: '6xl' }}
          fontWeight={'400'}
          fontFamily={'Playfair Display'}
        >
          Success Stories
        </Heading>
        <Text mt={'1rem'} maxW={'28em'} fontSize={'xl'}>
          Build yoru skills by working on real world problems faced by
          Companies.
        </Text>
      </Box>
      <Testimonials />
    </>
  );
};

export default Home;
