import { Text, Box, VStack, Stack, Center, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { isAuth } from '../../Helpers/auth';
import EditProfile from './EditProfile';

const NormalProfile = ({ editMode, setEditMode }) => {
  const { email, name, profilePicture, phoneNumber } = isAuth();

  console.log('profile from normal profile ', profilePicture);
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
        <Box bg={'transparent'} rounded={'full'}>
          <Box
            for='file'
            position={'absolute'}
            color={'white'}
            w={{ base: '6rem', md: '8rem' }}
            h={{ base: '6rem', md: '8rem' }}
            rounded={'full'}
            bg={'#ffffff70'}
            opacity={'0'}
          >
            <Center
              w={{ base: '6rem', md: '8rem' }}
              h={{ base: '6rem', md: '8rem' }}
            ></Center>
          </Box>

          <Image
            rounded={'full'}
            w={{ base: '6rem', md: '8rem' }}
            h={{ base: '6rem', md: '8rem' }}
            fit={'cover'}
            alt='user profile'
            src={profilePicture}
          />
        </Box>
        <Box
          as={'button'}
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
          onClick={() => setEditMode(true)}
        >
          Edit Profile
        </Box>
      </Stack>
      <VStack maxW={'20rem'} py={{ base: '4rem', md: '0' }} spacing={'1rem'}>
        <Box alignSelf={'flex-start'}>
          <Text fontSize={'2xl'}>Full Name</Text>
          <Text fontSize={'2xl'} textColor={'gray.400'}>
            {name}
          </Text>
        </Box>
        <Box alignSelf={'flex-start'}>
          <Text fontSize={'2xl'}>Email</Text>
          <Text fontSize={'2xl'} textColor={'gray.400'}>
            {email}
          </Text>
        </Box>
        <Box alignSelf={'flex-start'}>
          <Text fontSize={'2xl'}>Phone Number</Text>
          <Text fontSize={'2xl'} textColor={'gray.400'}>
            {phoneNumber ? phoneNumber : '000 000 000'}
          </Text>
        </Box>
      </VStack>
    </Stack>
  );
};
const Profile = () => {
  const [editMode, setEditMode] = useState(false);

  return editMode ? (
    <EditProfile editMode={editMode} setEditMode={setEditMode} />
  ) : (
    <NormalProfile editMode={editMode} setEditMode={setEditMode} />
  );
};

export default Profile;
