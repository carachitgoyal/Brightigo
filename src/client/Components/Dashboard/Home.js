import React from 'react';
import { isAuth } from '../../Helpers/auth';
import { Container, Text, Stack, Box } from '@chakra-ui/react';

const DashboardHome = () => {
  const { email, name } = isAuth();
  const firstName = name.split(' ').slice(0, -1).join(' ');
  return (
    <Container mt={'2rem'} pl={{ base: '0', md: '4rem' }}>
      <Text fontSize={{ base: '3xl', md: '5xl' }}>
        Welcome Back,{' '}
        <Text as='span' fontWeight={'600'}>
          {firstName}
        </Text>
      </Text>
      <Box py={'1rem'}>
        <Text>Last Test Score</Text>
        <Text fontSize={'2xl'}>80%</Text>
      </Box>
    </Container>
  );
};

export default DashboardHome;
