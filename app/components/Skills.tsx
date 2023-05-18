'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Icon3D = dynamic(() => import('./Icon3D'), { ssr: false });

const skills = [
  { name: 'Javascript, HTML & CSS', icon: '01.png' },
  { name: 'UX Development', icon: '02.png' },
  { name: 'React', icon: '03.png' },
  { name: 'App Development', icon: '04.png' },
  { name: 'Web3', icon: '05.png' },
  { name: 'UI Design', icon: '06.png' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 pb-20 px-20 bg-white relative">
      <div className="absolute -top-16 left-0 w-full h-32 bg-white transform -skew-y-3"></div>
      <div className="container mx-auto my-20">
        <h2 className='text-purple-700'>My Skills</h2>
        <h3 className="mb-4 text-purple-700">Bridging design and development with creativity and technology</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="w-24 h-24 bg-purple-800/20 rounded-full p-4">
                <Icon3D
                  src={`/icons/${skill.icon}`}
                  alt={`${skill.name} icon`}
                />
              </div>
              <span className="text-xl font-normal text-purple-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-16 left-0 w-full h-36 bg-white transform -skew-y-3"></div>
    </section>
  );
};

export default Skills;
