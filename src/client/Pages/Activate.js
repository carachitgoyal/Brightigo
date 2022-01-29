import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import {
  Heading,
  Text,
  Button,
  Center,
  Container,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { authenticate, isAuth, updateUser } from '../Helpers/auth';
import axios from 'axios';

const Activate = () => {
  const [formData, setFormData] = useState({ name: '', token: '', show: true });
  const navigate = useNavigate();
  const toast = useToast();
  let { token } = useParams();

  useEffect(() => {
    const theToken = token;
    let { name } = jwt.decode(token);
    if (theToken) {
      setFormData({ ...formData, name, theToken });
    }
  }, []);

  const { name, theToken, show } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/activation`, {
        token,
      })
      .then((res) => {
        setFormData({
          ...formData,
          show: false,
        });
        toast({
          title: res.data.message,
          status: 'success',
          duration: 2000,
        });
        authenticate(res);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log('error is ' + err);
        toast({
          title: err.response.data.errors,
          status: 'error',
          duration: 5000,
        });
      });
  };

  return (
    <Container
      w={'80vw'}
      maxW={'xl'}
      minW={'fit-content'}
      px={['2rem', '2rem', '3rem', '5rem']}
      py={'2rem'}
      mx={'auto'}
      bgColor={'#fefbff'}
      borderBottom={'3px solid'}
      borderColor={'purple.800'}
    >
      <VStack p={['1rem', '1rem', '2rem']} pb={'4rem'} bgColor={'#fefbff'}>
        <Center my={'1rem'} flexDirection={'column'}>
          <Heading fontWeight={'400'} mb={'0.5rem'} letterSpacing={'wider'}>
            Register
          </Heading>
          <Text fontSize={'sm'}> or Register with registered email </Text>
        </Center>
        <form onSubmit={handleSubmit}>
          <Button
            mt={'1rem'}
            type='submit'
            size='md'
            w={'100%'}
            fontSize={'lg'}
            fontWeight={'500'}
            rounded='none'
            color={'white'}
            bg={'purple.800'}
            _hover={{
              bg: '#543B99',
              color: 'white',
            }}
            _active={{
              bg: '#543B99',
              color: 'white',
            }}
            //  isLoading={isSubmitting}
          >
            Activate your Account
          </Button>
        </form>
        <Text fontSize={'sm'} py={'1rem'}>
          {' '}
          or{' '}
          <Text as='span' textColor={'blue.400'} fontWeight={'500'}>
            <Link to='/register'>sign up</Link>
          </Text>{' '}
          again
        </Text>
      </VStack>
    </Container>
  );
};
export default Activate;
