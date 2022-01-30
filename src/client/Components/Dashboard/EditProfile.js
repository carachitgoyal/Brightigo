import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Stack,
  VStack,
  Box,
  useToast,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { isAuth, updateUser } from '../../Helpers/auth';
import ProfilePicture from './ProfilePicture';

const EditProfile = ({ editMode, setEditMode }) => {
  const [profilePicture, setProfilePicture] = useState(
    'https://www.smsffinancial.com.au/wp-content/uploads/2018/09/Avatar-Placeholder.jpg'
  );
  const { email, name } = isAuth();
  const toast = useToast();
  let navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: name,
      email: email,
      phoneNumber: '',
    },
  });

  const changeProfilePictureHandler = (image) => {
    setProfilePicture(image);
  };

  const onSubmit = (data) => {
    Object.assign(data, { profilePicture: profilePicture });
    console.log(data);
    // axios
    //   .post('/api/123', data)
    //   .then((res) => {
    //     toast({
    //       title: 'Login Successful',
    //       status: 'success',
    //       duration: 2000,
    //     });
    //     //successfully logedin
    //     authenticate(res);
    //     navigate('/dashboard');
    //   })
    //   .catch((err) => {
    //     // setValue({});
    //     console.log(err);
    //     if (err.response.data.at == 'password') {
    //       setError('password', {
    //         type: 'server',
    //         message: err.response.data.errors,
    //       });
    //     }
    //     if (err.response.data.at == 'email') {
    //       setError('email', {
    //         type: 'server',
    //         message: err.response.data.errors,
    //       });
    //     }
    //   });
  };

  return (
    <Stack
      mt={'3rem'}
      pl={{ base: '0', md: '4rem' }}
      direction={{ base: 'column', md: 'row' }}
      align={{ base: 'center', md: 'start' }}
      justify={'center'}
      spacing={{ base: '1rem', md: '3rem' }}
    >
      <Stack
        direction={{ base: 'row', md: 'column' }}
        alignItems={'center'}
        spacing={'3rem'}
        mx={'auto'}
      >
        <ProfilePicture sendDataToParent={changeProfilePictureHandler} />
        <Box
          w={{ base: '6rem', md: '10rem' }}
          as={'button'}
          mt={'0.5rem'}
          px={'1.5rem'}
          py={'0.5rem'}
          h={'fit-content'}
          bg='purple.900'
          color={'white'}
          minW={'8rem'}
          _hover={{
            transform: 'scale(1.03)',
            transition: 'all .3s ease',
          }}
          fontSize={{ base: 'sm', md: 'xl' }}
          onClick={() => setEditMode(false)}
        >
          Cancel
        </Box>
      </Stack>
      <VStack
        pl={{ base: '0rem', md: '1rem', lg: '5rem' }}
        maxW={'20rem'}
        py={{ base: '4rem', md: '0' }}
        spacing={'1rem'}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            w={{ base: '17rem', sm: '18rem', md: '18rem', lg: '23rem' }}
          >
            <FormLabel fontSize={{ base: 'xl', md: '2xl' }}>
              Full Name
            </FormLabel>
            <Input
              mb={'1rem'}
              type='text'
              placeholder='Full Name'
              bg={'white'}
              size={'lg'}
              borderRadius={'0'}
              {...register('name', {
                required: 'Please enter Password',
              })}
            />
          </FormControl>
          <FormControl
            pt={'1rem'}
            w={{ base: '17rem', sm: '18rem', md: '18rem', lg: '23rem' }}
          >
            <FormLabel fontSize={{ base: 'xl', md: '2xl' }}>Email</FormLabel>
            <Input
              isDisabled
              mb={'1rem'}
              type='text'
              name='email'
              placeholder='Email'
              bg={'white'}
              size={'lg'}
              borderRadius={'0'}
              {...register('email')}
            />
          </FormControl>
          <FormControl
            pt={'1rem'}
            w={{ base: '17rem', sm: '18rem', md: '18rem', lg: '23rem' }}
          >
            <FormLabel fontSize={{ base: 'xl', md: '2xl' }}>
              Phone Number
            </FormLabel>
            <Input
              mb={'1rem'}
              type='number'
              name='phoneNumber'
              placeholder='Phone Number'
              bg={'white'}
              size={'lg'}
              borderRadius={'0'}
              {...register('phoneNumber')}
            />
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
            Save Changes
          </Button>
        </form>
      </VStack>
    </Stack>
  );
};

export default EditProfile;
