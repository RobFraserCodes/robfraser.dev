'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Icon3D = dynamic(() => import('./Icon3D'), { ssr: false });

const skills = [
  { name: 'Javascript', icon: '01.png' },
  { name: 'UX Development', icon: '02.png' },
  { name: 'React', icon: '03.png' },
  { name: 'App Development', icon: '04.png' },
  { name: 'SEO', icon: '05.png' },
  { name: 'UI Design', icon: '06.png' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 pb-20">
      <div className="container mx-auto">
        <h2>My Skills</h2>
        <h3 className="mb-4">
          Bridging design and development with creativity and technology
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="w-24 h-24 bg-slate-800/20 rounded-full p-4">
                <Icon3D
                  src={`/icons/${skill.icon}`}
                  alt={`${skill.name} icon`}
                />
              </div>
              <span className="text-xl font-normal">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
