import {
  Button,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import ImageHOC from './Img.HOC';

const LayoutHOC = (props) => {
  const onClickHandler = () => {
    props.onClickFunction();
  };

  return (
    <Container maxW='8xl' centerContent>
      <Flex
        flexDirection={{ base: 'column-reverse', lg: 'row' }}
        gap={'10vw'}
        alignItems={'center'}
      >
        <VStack maxW={'600px'} px={'2rem'}>
          <Heading
            fontSize={{ base: '44px', md: '56px', lg: '76px' }}
            fontFamily={'Playfair Display'}
            fontWeight={'light'}
            lineHeight={{ base: '50px', md: '80px', lg: '100px' }}
          >
            {props.title}
          </Heading>
          <Text
            py={'2rem'}
            fontSize={['md', 'lg', 'xl']}
            fontFamily={'Poppins'}
          >
            {' '}
            {props.body}
          </Text>
          <Button
            onClick={onClickHandler}
            alignSelf={'flex-start'}
            size='lg'
            bgColor={'purple.800'}
            textColor={'white'}
            rounded={'0'}
            m={'1rem'}
            _hover={{
              bg: '#FAF5FF',
              outline: '2px solid #543B99',
              color: '#543B99',
            }}
          >
            {props.button}
          </Button>
        </VStack>
        <Box m={'2rem'}>
          <ImageHOC img={props.img} />
        </Box>
      </Flex>
    </Container>
  );
};

export default LayoutHOC;
