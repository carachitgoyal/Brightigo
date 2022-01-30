import {
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import React from 'react';

const CourseContent = () => {
  return (
    <VStack py={'6rem'}>
      <Box py={'2rem'} w={'full'}>
        <Text
          alignSelf={'start'}
          pl={'2rem'}
          fontSize={{ base: '28px', md: '42px', lg: '42px' }}
          fontFamily={'Playfair Display'}
        >
          Course Content
        </Text>
        <Text
          fontWeight={'300'}
          textColor={'gray.500'}
          pl={'2rem'}
          textAlign={'start'}
          alignSelf={'start'}
        >
          23 Sections - 155 Lectures - 22H 13m Total Length
        </Text>
      </Box>
      <Flex
        w={'full'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'1rem'}
        fontSize={{ base: 'sm', md: 'md' }}
        px={{ base: '2rem', md: '6rem' }}
      >
        <Accordion
          border={'1px solid #44337A'}
          w={'full'}
          defaultIndex={[0]}
          allowMultiple
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={'1rem'}
                  textAlign='left'
                  fontSize={{ base: 'md', md: 'xl' }}
                >
                  Basics of Product Management
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel m={'1rem'} pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={'1rem'}
                  textAlign='left'
                  fontSize={{ base: 'md', md: 'xl' }}
                >
                  Designing, Mockups and Discussion Board Creation
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel m={'1rem'} pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  m={'1rem'}
                  flex='1'
                  textAlign='left'
                  fontSize={{ base: 'md', md: 'xl' }}
                >
                  Writing Document And Tracking Product Roadmap
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel m={'1rem'} pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={'1rem'}
                  textAlign='left'
                  fontSize={{ base: 'md', md: 'xl' }}
                >
                  Introduction To communication Skills: personality And
                  Behaviour in Product Management
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel m={'1rem'} pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={'1rem'}
                  textAlign='left'
                  fontSize={{ base: 'md', md: 'xl' }}
                >
                  Marketing Analytics: Pricing Strategies and Price Analysis
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel m={'1rem'} pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={'1rem'}
                  textAlign='left'
                  fontSize={{ base: 'md', md: 'xl' }}
                >
                  Advanced Product Management
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel m={'1rem'} pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </VStack>
  );
};

export default CourseContent;
