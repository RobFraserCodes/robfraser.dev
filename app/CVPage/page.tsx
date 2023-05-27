'use client';

import React from 'react';
// import dynamic from 'next/dynamic'; // Remove this line
import SocialIcons from '../components/subComponents/socialIcons';
import Head from './components/Head';
import TopBar from './components/TopBar';
//import html2canvas from 'html2canvas';
//import { jsPDF } from 'jspdf';

// Remove these lines
// const jsPDFDynamic = dynamic(() => import('jspdf'), { ssr: false });
// const html2canvasDynamic = dynamic(() => import('html2canvas'), { ssr: false });

const CVPage = () => {
{ /* const downloadAsPDF = async () => {
    const element = document.getElementById('resume-content');

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/jpeg', 0.98);

    const pdf = new jsPDF({ unit: 'in', format: 'letter', orientation: 'portrait' });
    pdf.addImage(imgData, 'JPEG', 0, 0);
    pdf.save('resume.pdf');
  }; */}
  
  return (
    <div id="resume-">
      <TopBar />
      <Head />
      <div className="min-h-screen w-full py-8 px-8 bg-off-white">
        <div className="container mx-auto">
          <div className="bg-white rounded-md shadow-sm p-8 mb-6">
            <p className="cv-headings">Web Developer & UX Designer</p>
            <p className="mb-6">
              A highly skilled web developer and UX designer with a strong background in software programming. Passionate about creating user-friendly, responsive, and visually appealing websites and applications.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-md shadow-sm p-8">
              <section title="Experience">
                <div className="mb-6">
                  <p className='subtitle'>Work Experience</p>
                  <p className="cv-headings">Freelance Web Developer & UX Designer</p>
                  <p className="text-lg">Self-employed, 2020 - Present</p>
                  <ul className="list-disc pl-6">
                    <li>
                      Designed and developed responsive websites and web applications using HTML, CSS, JavaScript, and modern frameworks like React and Next.js.
                    </li>
                    <li>
                      Conducted user research, created user personas, and designed user flows to ensure a seamless user experience across various platforms and devices.
                    </li>
                    <li>
                      Collaborated with clients to identify their specific needs and requirements and delivered high-quality solutions within tight deadlines.
                    </li>
                    <li>
                      Utilized version control tools like Git to manage project code and collaborated with other developers to ensure smooth and efficient development processes.
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="bg-white rounded-md shadow-sm p-8">
              <section title="Skills">
                <div className="mb-6">
                  <p className='subtitle'>Technologies I work with</p>
                  <p className='cv-headings'>Skills</p>
                  <ul className="list-disc pl-6">
                    <li>Web Development: HTML, CSS, JavaScript, React, Next.js</li>
                    <li>UX Design: User research, wireframing, prototyping, usability testing</li>
                    <li>Version Control: Git, GitHub, GitLab</li>
                    <li>Project Management: Agile, Scrum, Kanban</li>
                    <li>Communication: Strong written and verbal communication skills</li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="bg-white rounded-md shadow-sm p-8">
            <section title="Education">
                <div className="mb-6">
                  <p className='subtitle'>Education</p>
                  <p className="cv-headings">BSc. // Software Programming</p>
                  <p className="text-lg">University of the Highlands and Islands, 2006 - 2010</p>
                </div>
              </section>
            </div>
          </div>
          <div className="mt-8 text-center">
            {/* <button
              className="no-print bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={downloadAsPDF}
            >
              Download as PDF
  </button> */ }
            <a href="/"><button
              className="mx-8 no-print bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
            >
              Return to Home Page
            </button></a>
          </div>
          </div>
        </div>
      </div>
  )
}

export default CVPage;
  