import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
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
import { Link, Navigate, useParams } from 'react-router-dom';
import { isAuth } from '../Helpers/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import jwt from 'jsonwebtoken';

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

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    resetPasswordLink: '',
    newPassword: '',
  });
  let params = useParams();
  const toast = useToast();

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password length should be at least 8 characters'),
    passwordConfirm: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must and should match'),
  });

  const validationOpt = { resolver: yupResolver(formSchema) };
  const {
    handleSubmit,
    register,
    setError,
    getValues,
    reset,
    formState: { errors },
  } = useForm(validationOpt);

  useEffect(() => {
    console.log(getValues('password'));
    const resetPasswordLink = params.token;
    let { newPassword } = getValues('password');

    if (resetPasswordLink) {
      setFormData({ resetPasswordLink, newPassword });
    }

    console.log(
      'resetPasswordLink - ' +
        resetPasswordLink +
        ' newPassword - ' +
        newPassword
    );
  }, []);

  const { resetPasswordLink, newPassword } = formData;

  const onSubmit = () => {
    axios
      .put(`/api/password/reset`, {
        formData,
      })
      .then((res) => {
        setFormData({
          ...formData,
          show: false,
        });
        console.log(res);
        toast({
          title: res.data.message,
          status: 'success',
          duration: 2000,
        });
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
      {/* {isAuth() ? <Navigate replace to='/' /> : null}*/}
      <VStack p={['1rem', '1rem', '2rem']} pb={'4rem'} bgColor={'#fefbff'}>
        <Center my={'1rem'} flexDirection={'column'}>
          <Heading fontWeight={'400'} mb={'0.5rem'} letterSpacing={'wider'}>
            Reset Password
          </Heading>
          <Text fontSize={'sm'} maxW={'18rem'} textAlign={'center'} my={'1rem'}>
            Your New Password Must be Different from Previous used Password
          </Text>
        </Center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            py={'1rem'}
            w={{ base: '15rem', sm: '18rem', md: '25rem' }}
            isRequired
          >
            <FormLabel fontSize={{ base: 'md', md: 'xl' }}>Password</FormLabel>
            <Tooltip
              label='Minimum 8 Charackters, including UPPER/lowercase and numbers'
              hasArrow
              arrowSize={8}
              placement='top'
              closeOnClick={false}
              bg='pink.600'
            >
              <InputGroup>
                <Input
                  mb={'1rem'}
                  borderRadius={'0'}
                  bg={'white'}
                  size={'lg'}
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  {...register('password')}
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
            </Tooltip>
            {errors.password && <AlertPop title={errors.password.message} />}
          </FormControl>
          <FormControl
            py={'1rem'}
            w={{ base: '15rem', sm: '18rem', md: '25rem' }}
            isRequired
          >
            <FormLabel fontSize={{ base: 'md', md: 'xl' }}>
              Confirm Password
            </FormLabel>
            <InputGroup>
              <Input
                mb={'1rem'}
                borderRadius={'0'}
                bg={'white'}
                size={'lg'}
                type={showPassword ? 'text' : 'password'}
                placeholder='Confirm Password'
                {...register('passwordConfirm')}
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
            {errors.passwordConfirm && (
              <AlertPop title={errors.passwordConfirm.message} />
            )}
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
            //     isLoading={isSubmitting}
          >
            Save
          </Button>
        </form>
        <Text fontSize={'sm'} py={'1rem'}>
          {' '}
          Back to{' '}
          <Text as='span' textColor={'blue.400'} fontWeight={'500'}>
            <Link to='/login'>Signup</Link>
          </Text>{' '}
          Page
        </Text>
      </VStack>
    </Container>
  );
};
export default Signup;
