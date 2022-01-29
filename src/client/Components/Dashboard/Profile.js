import {
  Avatar,
  Input,
  AvatarBadge,
  Image,
  Box,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { isAuth } from '../../Helpers/auth';
import { TiPlus } from 'react-icons/ti';
import ProfilePicture from './ProfilePicture';

const Profile = () => {
  const { email, name } = isAuth();

  return (
    <Stack>
      <Stack
        direction={{ base: 'row', md: 'column' }}
        alignItems={'center'}
        spacing={'3rem'}
        mx={'auto'}
      >
        <ProfilePicture />
        <Box
          px={'1.5rem'}
          py={'0.5rem'}
          as={'button'}
          h={'fit-content'}
          bg={'purple.900'}
          color={'white'}
          minW={'8rem'}
          fontSize={{ base: 'sm', md: 'xl' }}
        >
          Edit Profile
        </Box>
      </Stack>
    </Stack>
  );
};

export default Profile;
