import React from 'react'
import WelcomeCharity from './WelcomeCharity';
import Volunteer from './Volunteer';
import OurBlog from './OurBlog';
import Volunteer2 from './Volunteer2';
import Carousel from './Carousel';

const Home = () => {
  return (
    <>
        <Carousel />
        <WelcomeCharity />
        <Volunteer />
        <Volunteer2 />
        <OurBlog />
    </>
  )
}

export default Home