import React from 'react';
import Image from 'next/image';
import meeting from '../../public/06.png';
import shape from '../../public/07.png';

type Props = {}

function About({}: Props) {
  return (
    <section id="about" className='min-h-screen flex justify-center mx-auto py-40 bg-primary text-white'>
      <div className='container lg:px-20'>
          <h1 className=''>UX Designer & Developer</h1>
          <h3 className='font-thin mb-20'>Bridging design and development with creativity and technology</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 mx-8 gap-4'>
          <div>
              <Image className=" w-full object-cover mb-4 w-114 h-114 lg:w-[400px]" src={meeting} alt="" />
          </div>
          <div className='md:pl-8 mb-4 flex flex-col justify-center'>
            <p className='mb-4'>Welcome to my website! I am a UX designer and front-end developer with a passion for creating beautiful, intuitive, and user-friendly interfaces. With over 10 years of experience in the field, I have honed my skills in design, coding, and user research to deliver exceptional digital experiences that delight users and meet business goals.</p>
            <p className='mb-4'>As a UX designer, I approach every project with a deep understanding of user needs and behaviors. I conduct extensive research to gain insights into the user&apos;s goals, pain points, and preferences. Using this information, I develop user personas, user flows, and wireframes that guide the design process and ensure that the final product meets the user&apos;s needs.</p>
         </div>
          <div className='md:mr-8 flex flex-col justify-center'>
            <p className='mb-4'>As a front-end developer, I specialise in creating responsive, accessible, and performant web applications using the latest technologies. I have expertise in HTML, CSS, JavaScript, React, and other front-end frameworks and libraries. I pay close attention to details and always strive to create pixel-perfect designs that look and feel great on any device.</p>
            <p className='mb-4'>Whether you need help designing a new product, optimising an existing one, or building a custom web application from scratch, I am here to help. Feel free to browse my portfolio and get in touch if you have any questions or would like to discuss a project. Let&apos;s work together to create something amazing!</p>
        </div>
          <div className='mx-auto'>
              <Image className="w-full lg:w-[400px]" src={shape} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About