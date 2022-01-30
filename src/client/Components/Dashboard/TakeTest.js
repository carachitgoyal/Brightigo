import React from 'react';
import { Button, Center, Box } from '@chakra-ui/react';
import { isAuth } from '../../Helpers/auth';

const TakeTest = () => {
  const { _id } = isAuth();
  console.log('process.env url - ', process.env.REACT_APP_TAKE_TEST);
  console.log('process.env google - ', process.env._GOOGLE_CLIENT_ID);
  return (
    <Center
      h={'fit-content'}
      w={'fit-content'}
      mx={'auto'}
      alignSelf={{ base: 'start', md: 'start' }}
    >
      <Box
        flex={1}
        alignItems={'center'}
        justifyContent={'center'}
        as={'a'}
        href={`${process.env.REACT_APP_TAKE_TEST}/${_id}`}
        px={'2rem'}
        py={'1rem'}
        bg={'purple.900'}
        color={'white'}
        fontSize={'lg'}
        minW={'10rem'}
        my={{ base: '2rem', md: '5rem' }}
        mx={{ base: '1rem', sm: '4rem' }}
        _hover={{
          bg: 'purple.50',
          outline: '2px solid #44337a',
          color: '#44337a',
        }}
      >
        Take test
      </Box>
    </Center>
  );
};

export default TakeTest;
