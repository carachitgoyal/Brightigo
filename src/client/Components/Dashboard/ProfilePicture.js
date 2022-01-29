import { Box, Input, Image, Text, Center, FormLabel } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { TiCamera } from 'react-icons/ti';
import { useDropzone } from 'react-dropzone';

const ProfilePicture = () => {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevState) => [...prevState, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  useEffect(() => {
    console.log('images array - ', images);
  }, [images]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/png',
  });

  return (
    <Box bg={'transparent'} rounded={'full'}>
      <FormLabel
        for='file'
        position={'absolute'}
        color={'white'}
        w={'8rem'}
        h={'8rem'}
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
        <Center w={'8rem'} h={'8rem'}>
          <TiCamera size={40} />
        </Center>
      </FormLabel>

      <Image
        rounded={'full'}
        w={'8rem'}
        h={'8rem'}
        fit={'cover'}
        src={images[1]}
      />
    </Box>
  );
};

export default ProfilePicture;
