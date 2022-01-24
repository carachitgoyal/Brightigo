import React from 'react';
import LayoutHOC from '../Components/HOC/Layout.HOC';
import HeroImage from '../../../public/Images/hero2.jpg';

const Course = () => {
  return (
    <LayoutHOC
      title='Product Management programmme'
      body='Learn from the best minds in the industry and make yourself ready for the real world of Product Management.'
      img={HeroImage}
      onClickFunction={() => window.alert('button Clicked from course page')}
      button='Apply Now'
    />
  );
};

export default Course;
