import React from 'react';
import LayoutHOC from '../Components/HOC/Layout.HOC';
import HeroImage from '../../../public/Images/hero2.jpg';
import CourseHighlight from '../Components/Course/CourseHighlight';
import CourseContent from '../Components/Course/CourseContent';
import { Box } from '@chakra-ui/react';

const Course = () => {
  return (
    <>
      <LayoutHOC
        title='Product Management programmme'
        body='Learn from the best minds in the industry and make yourself ready for the real world of Product Management.'
        img={HeroImage}
        onClickFunction={() => window.alert('button Clicked from course page')}
        button='Apply Now'
      />
      <Box bg={'white'} w={'full'}>
        <Box maxW={'6xl'} mx={'auto'} bg={'white'} py={'5rem'} mt={'3rem'}>
          <CourseHighlight />
          <CourseContent />
        </Box>
      </Box>
    </>
  );
};

export default Course;
