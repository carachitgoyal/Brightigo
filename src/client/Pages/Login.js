import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';
import {
  FormLabel,
  FormControl,
  Input,
  Heading,
  Text,
  Button,
  Center,
  Box,
  Container,
  Alert,
  AlertIcon,
  AlertTitle,
  VStack,
  useToast,
  InputRightElement,
  InputGroup,
  Tooltip,
} from '@chakra-ui/react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { authenticate, isAuth, updateUser } from '../Helpers/auth';
import { TokenExpiredError } from 'jsonwebtoken';

const AlertPop = (props) => {
  return (
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle mr={4} textColor={'red'} fontWeight={'500'}>
        {props.title}
      </AlertTitle>
    </Alert>
  );
};

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const toast = useToast();
  let navigate = useNavigate();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('/api/login', data)
      .then((res) => {
        toast({
          title: 'Login Successful',
          status: 'success',
          duration: 2000,
        });
        //successfully logedin
        authenticate(res);
        navigate('/dashboard');
      })
      .catch((err) => {
        // setValue({});
        console.log(err);
        if (err.response.data.at == 'password') {
          setError('password', {
            type: 'server',
            message: err.response.data.errors,
          });
        }
        if (err.response.data.at == 'email') {
          setError('email', {
            type: 'server',
            message: err.response.data.errors,
          });
        }
      });
  };

  const googleSuccess = (tokenId) => {
    axios
      .post('/api/googlelogin', {
        idToken: tokenId.tokenId,
      })
      .then((res) => {
        toast({
          title: 'Google Login Success',
          status: 'success',
          duration: 3000,
        });
        //successfully logedin
        authenticate(res);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: 'Google Login Error',
          status: 'error',
          duration: 3000,
        });
      });
  };

  const googleFailure = (response) => {
    console.log(response);
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
      {isAuth() ? <Navigate replace to='/home' /> : null}
      <VStack p={['1rem', '1rem', '2rem']} pb={'4rem'} bgColor={'#fefbff'}>
        <Center my={'1rem'} flexDirection={'column'}>
          <Heading fontWeight={'400'} mb={'0.5rem'} letterSpacing={'wider'}>
            Login
          </Heading>
          <Center py={[2, 2, 4]} w={'full'}>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy={'single_host_origin'}
              render={(renderProps) => (
                <Button
                  px={16}
                  border={'none'}
                  borderRadius={'0'}
                  w={{ base: '15rem', sm: '18rem', md: '25rem' }}
                  h={'3.5em'}
                  maxW={'md'}
                  variant={'outline'}
                  leftIcon={<FcGoogle size='1.85em' />}
                  bg={'white'}
                  _hover={{
                    bgColor: 'gray.100',
                  }}
                  onClick={renderProps.onClick}
                >
                  <Center
                    fontWeight={'500'}
                    fontSize={{ base: 'md', md: 'lg' }}
                    pl={'0.5rem'}
                  >
                    <Text textColor={'gray.500'}>login with Google</Text>
                  </Center>
                </Button>
              )}
            />
          </Center>
          <Text fontSize={'sm'}> or login with registered email </Text>
        </Center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            pt={'1rem'}
            w={{ base: '15rem', sm: '18rem', md: '25rem' }}
            isRequired
          >
            <FormLabel fontSize={{ base: 'md', md: 'xl' }}>Email</FormLabel>
            <Input
              mb={'1rem'}
              type='text'
              placeholder='Email'
              bg={'white'}
              size={'lg'}
              borderRadius={'0'}
              {...register('email', {
                required: 'Please enter registered email',
                pattern: {
                  value:
                    /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Enter a valid email',
                },
              })}
            />
            {errors.email && <AlertPop title={errors.email.message} />}
          </FormControl>

          <FormControl
            py={'1rem'}
            w={{ base: '15rem', sm: '18rem', md: '25rem' }}
            isRequired
          >
            <FormLabel fontSize={{ base: 'md', md: 'xl' }}>Password</FormLabel>
            <InputGroup>
              <Input
                mb={'1rem'}
                borderRadius={'0'}
                bg={'white'}
                size={'lg'}
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                {...register('password', {
                  required: 'Please enter Password',
                })}
              />
              <InputRightElement>
                <Box
                  flex={'1'}
                  mt={'6px'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  h='1.5rem'
                  size={'lg'}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <ViewOffIcon w={6} h={6} color={'purple.600'} />
                  ) : (
                    <ViewIcon w={6} h={6} color={'purple.600'} />
                  )}
                </Box>
              </InputRightElement>
            </InputGroup>
            {errors.password && <AlertPop title={errors.password.message} />}
          </FormControl>
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
            isLoading={isSubmitting}
          >
            Login
          </Button>
        </form>
        <Link to='/users/password/forget'>
          <Text fontSize={'sm'} py={'1rem'}>
            {' '}
            Forgot Password{' '}
          </Text>
        </Link>
      </VStack>
    </Container>
  );
};
export default Login;
