import React from 'react';

import Python from '../assets/python.svg';
import TypeScript from '../assets/typescript.svg';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Express from '../assets/express.js.png';
import AWS from '../assets/aws.png';
import MySql from '../assets/mysql.svg';
import Next from '../assets/next.png';
import Docker from '../assets/docker.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'>These are some of the technologies I've worked with:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt='HTML icon' />
            <p className='my-4'>Javascript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TypeScript} alt='HTML icon' />
            <p className='my-4'>TypeScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt='HTML icon' />
            <p className='my-4'>React JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt='HTML icon' />
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={MySql} alt='HTML icon' />
            <p className='my-4'>MySQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Express} alt='HTML icon' />
            <p className='my-4'>Express</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='HTML icon' />
            <p className='my-4'>Node JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={AWS} alt='HTML icon' />
            <p className='my-4'>AWS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Next} alt='HTML icon' />
            <p className='my-4'>Next JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Docker} alt='HTML icon' />
            <p className='my-4'>Docker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
