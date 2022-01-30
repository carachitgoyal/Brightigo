import React from 'react';
import { Box, Heading, Text, Avatar, Center, VStack } from '@chakra-ui/react';
import Slider from 'react-slick';
import { ImQuotesLeft } from 'react-icons/im';
import '../../Styles/slick.css';

const settings = {
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoPlay: true,
  autoPlaySpeed: 3000,
  speed: 1500,
  index: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
      },
    },
  ],
};

export default function CaptionCarousel() {
  const cards = [
    {
      name: 'Angel Dokidis',
      about: 'Freelancer at fiver',
      body: 'Quality of Work – The Best.  When you say you will be there, you are there – thank you. Staff – the Best.  Everything is very clean & neat',
      url: 'https://images.generated.photos/uKjxbHEufqSoLeZXqc9kCzDFhbx_2r555M_Zq3FGmrs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQ2NTc2LmpwZw.jpg',
    },
    {
      name: 'Adison Aminoff',
      about: 'CEO at Brightigo',
      body: 'I received outstanding service and I was so fortunate to pick your laundry in the telephone book.  There is nothing you can do differently to make my experience better.',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkstvneL1UVFnPpjuthvShjgYbPSrdNXIMcw&usqp=CAU',
    },
    {
      name: 'Justin Calzoni',
      about: 'Product Manager',
      body: ' I took my duvet cover and pillow cases for the drop off service and it was quick and easy to do. Will come here again for my laundry needs.',
      url: 'https://i1.sndcdn.com/avatars-000583246488-dhm5la-t240x240.jpg',
    },
    {
      name: 'Justin Calzoni',
      about: 'Web Developer',
      body: 'This place was amazing! Quality service and very clean. I took my duvet cover and pillow cases for the drop off service and it was quick and easy to do. Will come here again for my laundry needs.',
      url: 'https://i.pinimg.com/originals/de/64/80/de64801f0275c1ab2ea5a9e2bb3ce7bc.jpg',
    },
  ];

  return (
    <Box my={'8rem'}>
      {/* CSS files for react-slick */}
      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      <Slider {...settings}>
        {cards.map((item, index) => (
          <Center
            px={'5rem'}
            key={index}
            bg={'transparent'}
            mx={'auto'}
            _before={{
              content: `""`,
              position: 'absolute',
              top: 'clamp(50px, 80vw, 66vh)',
              width: '180px',
              height: '180px',
              background: '#44337A',
              filter: 'blur(80px)',
              zIndex: '-1',
              transform: 'translateX(10px)',
            }}
          >
            <VStack
              minH={'25rem'}
              bg={'white'}
              m={{ base: '1rem', lg: '2rem' }}
              w={'fit-content'}
              px={'5rem'}
              py={'2rem'}
              m={'auto'}
            >
              <Avatar
                name={item.name}
                src={item.url}
                m={['1rem', '2rem']}
                size={'md'}
              />
              <Text
                textColor={'purple.900'}
                textAlign={'center'}
                maxW={{ base: '40vw', md: '30rem' }}
                fontSize={{ base: '8px', lg: 'sm' }}
              >
                "{item.body}"
              </Text>
              <Heading
                fontSize={{ base: 'xs', lg: 'md' }}
                pt={'1rem'}
                textColor={'purple.900'}
              >
                {item.name}
              </Heading>
              <Text
                fontSize={{ base: '10px', lg: 'xs' }}
                pb={'2rem'}
                lineHeight={'2px'}
                textColor={'purple.900'}
              >
                {item.about}
              </Text>
            </VStack>
          </Center>
        ))}
      </Slider>
    </Box>
  );
}
