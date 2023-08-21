import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-600 my-2'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>
          Abdallah Amir
        </h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>
          I'm a Frontend Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive ReactJS web applications.
        </p>
        <div>
          <Link
            to='work'        // Specify the target section's ID
            smooth={true}    // Enable smooth scrolling
            duration={500}   // Set the scroll duration in milliseconds
            style={{ width: 'fit-content' }} // Set the button width
            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'
          >
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
