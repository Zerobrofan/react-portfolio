import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Git from '../assets/git.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import AWS from '../assets/aws.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Skills</p>
                  <p className=' py-6'>A collection of tools I use in my work daily 💻</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-7 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>ReactJS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                      <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                      <p className='my-4'>Tailwind</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                      <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                      <p className='my-4'>AWS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                  <img className='w-20 mx-auto' src={Git} alt="HTML icon" />
                  <p className='my-4'>GIT</p>
                  </div>
                  
                  <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                      <img className='w-20 mx-auto' src={Github} alt="HTML icon" />
                      <p className='my-4'>GitHub</p>
              </div>   
          </div>
      </div>
    </div>
  );
};

export default Skills;
