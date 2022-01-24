import { Center, Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import CircleType from 'circletype';
import { motion } from 'framer-motion';
import HeroImage from '../../../../public/Images/hero2.jpg';
import HexagoneShape from '../SVG/hexagoneShape';

const MotionCenter = motion(Center);

const ImageHOC = (props) => {
  useEffect(() => {
    const circleType = new CircleType(document.getElementById('circularText'));
    circleType.radius(30).dir(-1);
  }, []); //empty array will run only once (after the initial render)

  return (
    <Flex flexDir={'column'} alignItems={'start'} w={'full'}>
      <Center
        transform={{ base: 'translateX(40px)', md: 'translateX(60px)' }}
        zIndex={'0'}
        alignSelf={'flex-end'}
        w={{ base: '80px', md: '140px' }}
        h={{ base: '80px', md: '140px' }}
        position={'absolute'}
      >
        <HexagoneShape />
      </Center>
      <Box zIndex={'1'}>
        <Image
          src={props.img}
          alt='hero'
          w={'250px'}
          h={'350px'}
          w={{ base: '60vw', md: '400px', lg: '450px' }}
          h={{ base: '300px', md: '500px' }}
          objectFit={'cover'}
          overflow={'clip'}
          my={{ base: '40px', md: '60px' }}
          //boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(85, 69, 154) 0px 30px 60px -30px'
          zIndex={'1'}
        />
        <Box>
          <Box
            _before={{
              content: `""`,
              position: 'absolute',
              top: 'clamp(50px, 80vw, 66vh)',
              width: '180px',
              height: '180px',
              background: '#44337A',
              filter: 'blur(80px)',
              zIndex: '-1',
              transform: 'translateX(80px)',
            }}
          />
        </Box>
      </Box>

      <Center>
        <MotionCenter
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, type: 'tween' }}
          bgColor={'white'}
          rounded={'full'}
          w={{ base: '80px', md: '140px' }}
          h={{ base: '80px', md: '140px' }}
          position='absolute'
          zIndex={'2'}
          alignSelf='end'
        >
          <Text
            fontWeight={'700'}
            fontSize={{ base: '8px', md: '14px' }}
            textTransform={'uppercase'}
            className='text'
            id='circularText'
          >
            Register Now • Register Now •{' '}
            {/* {props.roundedText}{' '}•{' '} {props.roundedText}{' '}•{' '} */}
          </Text>
        </MotionCenter>
      </Center>
    </Flex>
  );
};

export default ImageHOC;
