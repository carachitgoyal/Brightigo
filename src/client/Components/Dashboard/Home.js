import React, { useEffect, useState } from 'react';
import { isAuth } from '../../Helpers/auth';
import { Container, Text, Stack, Box } from '@chakra-ui/react';
import axios from 'axios';

const DashboardHome = () => {
  const [score, setScore] = useState('');
  const [percentage, setPercentage] = useState('');
  const { email, name, _id } = isAuth();
  const firstName = name.split(' ').slice(0, -1).join(' ');

  const quizlink = `${process.env.REACT_APP_TAKE_TEST}/${_id}`;

  useEffect(() => {
    axios
      .get(`/api/user/${_id}`)
      .then((res) => {
        setScore(res.data.test.score);
        setPercentage(res.data.test.percentage);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container mt={'2rem'} pl={{ base: '0', md: '4rem' }}>
      {score ? (
        <>
          <Text fontSize={{ base: '3xl', md: '5xl' }}>
            Welcome Back,{' '}
            <Text as='span' fontWeight={'600'}>
              {firstName}
            </Text>
          </Text>
          <Box py={'1rem'}>
            <Text>Last Test Score</Text>
            <Text fontSize={'2xl'}>{score}/15</Text>
          </Box>
        </>
      ) : (
        <>
          <Text fontSize={{ base: '3xl', md: '5xl' }}>
            Welcome{' '}
            <Text as='span' fontWeight={'600'}>
              {firstName}
            </Text>
          </Text>
          <Box py={'1rem'} fontSize={'xl'}>
            <Text as='span'>
              Know if you can be the next product manager at Google{' '}
            </Text>
            <Box as='a' href={quizlink} textDecoration={'underline'}>
              Take a text
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
};

export default DashboardHome;
