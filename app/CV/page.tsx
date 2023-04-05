'use client';
import React from 'react';
import SocialIcons from "../components/subComponents/socialIcons";

export default function Home() {
    return (
      <>
        <div id="cv-content" className="min-h-screen container mx-auto max-w-5xl py-8 px-8">
          <div className='flex justify-between'>
            <h1 className="text-4xl font-bold mb-6">Rob Fraser</h1>
            <a href="/"><div>
              <p className='flex p-2 bg-white rounded-md shadow-md text-slate-800'>
              Back to Home</p>
            </div></a>
          </div>
            <h2 className="text-2xl font-semibold mb-4">Web Developer & UX Designer</h2>
            <p className="">
              A highly skilled web developer and UX designer with a strong background in software programming. Passionate about creating user-friendly, responsive and visually appealing websites and applications.
            </p>
          <div className='flex mb-6 no-print'>
            <SocialIcons />
          </div>
          <div className='flex gap-12 flex-wrap'>
            <div className='lg:w-1/2'>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">BSc. // Software Programming</h3>
                <p className="text-lg">University of the Highlands and Islands, 2006 - 2010</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Freelance Web Developer & UX Designer</h3>
                <p className="text-lg">Self-employed, 2020 - Present</p>
                <ul className="list-disc pl-6">
                  <li>
                    Designed and developed responsive websites and web applications using HTML, CSS, JavaScript and modern frameworks like React and Next.js.
                  </li>
                  <li>
                    Conducted user research, created user personas and designed user flows to ensure a seamless user experience across various platforms and devices.
                  </li>
                  <li>
                    Collaborated with clients to identify their specific needs and requirements, and delivered high-quality solutions within tight deadlines.
                  </li>
                  <li>
                    Utilised version control tools like Git to manage project code and collaborated with other developers to ensure smooth and efficient development processes.
                  </li>
                </ul>
              </div>
            </div>

            <div className='lg:w-1/2'>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="mb-6">
                <ul className="list-disc pl-6">
                  <li>Web Development: HTML, CSS, JavaScript, React, Next.js</li>
                  <li>UX Design: User research, wireframing, prototyping, usability testing</li>
                  <li>Version Control: Git, GitHub, GitLab</li>
                  <li>Project Management: Agile, Scrum, Kanban</li>
                  <li>Communication: Strong written and verbal communication skills</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
              <p className="mb-6">
                Phone: +44 7727777494<br />
                Email: hi@robfraser.dev
              </p>

            </div>
          </div>

          <button
            className="no-print bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download as PDF
          </button>
        </div>
      </>
  )
}
  