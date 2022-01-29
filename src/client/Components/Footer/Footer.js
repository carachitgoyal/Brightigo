import React from 'react';
import {
  Flex,
  Text,
  Stack,
  Heading,
  Center,
  VStack,
  HStack,
  Container,
} from '@chakra-ui/react';
import Logo from '../Logo';
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container maxW='container.3xl' bg={'white'} alignSelf={'baseline'}>
      <VStack
        mx={'auto'}
        maxW='8xl'
        align={'start'}
        justifyContent={'baseline'}
        spacing={{ base: '4rem', lg: '6rem' }}
      >
        <Flex w={'full'} alignItems={['center', 'center', 'left']}>
          <HStack
            spacing={{ base: '2rem', sm: '4rem', lg: '4rem' }}
            mt={{ base: '2rem', lg: '4rem' }}
            mx={{ base: 'auto', lg: '2rem' }}
            w={'fit-content'}
          >
            <Center w={{ base: '8rem', sm: '10rem', lg: '18rem' }}>
              <Logo />
            </Center>
            <Link to='/register'>
              <Center
                bg={'purple.900'}
                h={{ base: '2.2rem', sm: '3.5rem', lg: '3rem' }}
                w={'7rem'}
                borderRadius={0}
                color={'white'}
                size={{ base: 'md', lg: 'xl' }}
              >
                Apply Now
              </Center>
            </Link>
          </HStack>
        </Flex>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          alignItems={'start'}
          mx={'auto'}
          maxW='8xl'
          w={'full'}
          justifyContent={'space-between'}
          spacing={{ base: '3rem', lg: '4rem' }}
        >
          <HStack
            fontSize={{ base: 'sm', sm: 'md', lg: 'xl' }}
            spacing={{ base: '2rem', lg: '4rem' }}
            alignItems={'flex-start'}
            maxW={'xl'}
            mx={{ base: 'auto', lg: '0' }}
            w='full'
            justify={'space-evenly'}
          >
            <VStack alignItems={'flex-start'}>
              <Heading fontSize={{ base: 'sm', sm: 'md', lg: 'xl' }}>
                Explore
              </Heading>
              <Text>Instructors</Text>
              <Text>Projects</Text>
              <Text>Program Overview</Text>
              <Text>Why Brightigo</Text>
              <Text>Why Brightigo</Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Heading fontSize={{ base: 'sm', lg: 'lg' }}>
                Browse Pages
              </Heading>
              <Text>Syllabus</Text>
              <Text>FAQ</Text>
              <Text>Blog</Text>
              <Text>Contact Us</Text>
            </VStack>
          </HStack>
          <HStack
            alignSelf={{ base: 'center', lg: 'end' }}
            spacing={{ base: '1rem', lg: '2rem' }}
          >
            <FaYoutube size={24} />
            <FaFacebookF size={24} />
            <FaTwitter size={24} />
            <FaLinkedinIn size={24} />
            <AiFillInstagram size={24} />
          </HStack>
        </Stack>
        <Center w={'full'} pb={'2rem'}>
          <Text
            textAlign='center'
            maxW={{ base: '20rem', lg: '2xl' }}
            fontSize={{ base: 'xs', lg: 'sm' }}
            mx={'auto'}
            selfAlign='center'
          >
            Copyright 2022 Brightigo Private limited. All rights reserved
          </Text>
        </Center>
      </VStack>
    </Container>
  );
};

export default Footer;
