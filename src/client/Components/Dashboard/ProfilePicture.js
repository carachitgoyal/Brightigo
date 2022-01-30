import { Box, Input, Image, Text, Center, FormLabel } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { TiCamera } from 'react-icons/ti';
import { useDropzone } from 'react-dropzone';
import { isAuth } from '../../Helpers/auth';

const ProfilePicture = ({ sendDataToParent }) => {
  const [image, setImage] = useState(isAuth().profilePicture);

  const onDrop = useCallback((acceptedFiles) => {
    const acceptedFile = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(acceptedFile);
  });

  useEffect(() => {
    sendDataToParent(image);
  }, [image]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/png',
    multiple: false,
  });

  return (
    <Box bg={'transparent'} rounded={'full'}>
      <FormLabel
        for='file'
        position={'absolute'}
        color={'white'}
        w={{ base: '6rem', md: '8rem' }}
        h={{ base: '6rem', md: '8rem' }}
        rounded={'full'}
        bg={'#ffffff70'}
        opacity={'0'}
        _hover={{
          opacity: 1,
          transition: 'all .3s ease',
          cursor: 'pointer',
        }}
        {...getRootProps()}
      >
        <Input {...getInputProps()} />{' '}
        <Center
          w={{ base: '6rem', md: '8rem' }}
          h={{ base: '6rem', md: '8rem' }}
        >
          <TiCamera size={40} />
        </Center>
      </FormLabel>

      <Image
        rounded={'full'}
        w={{ base: '6rem', md: '8rem' }}
        h={{ base: '6rem', md: '8rem' }}
        fit={'cover'}
        alt='user profile'
        src={image}
      />
    </Box>
  );
};

export default ProfilePicture;
