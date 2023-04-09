'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Icon3D = dynamic(() => import('./Icon3D'), { ssr: false });

const skills = [
  { name: 'HTML', icon: '16.png' },
  { name: 'UX Development', icon: '17.png' },
  { name: 'HTML', icon: '18.png' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto">
        <h2>My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <Icon3D
                src={`/icons/${skill.icon}`}
                alt={`${skill.name} icon`}
              />
              <span className="text-xl font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
