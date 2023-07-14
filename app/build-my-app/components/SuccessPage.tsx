import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SuccessPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 dark:text-white flex-col items-center">
      <h1 className="">Thank you</h1>
      <div className="flex flex-col md:flex-row md:items-center w-full md:space-x-8">
        <div className="w-full md:w-1/2 text-right p-8">
          <p className="text-lg">We will get back to you as soon as possible.</p>
          <p className="text-lg">Have a great day!</p>
          <p className='pt-4'><span className='font-semibold'>Rob</span></p>
        </div>
        <div className="w-full md:w-1/2">
        <div className="rounded-full p-8">
          {/* <div className="rounded-full bg-white"> */}
            <Image src="/profile.png" alt="Success Image" width={400} height={400} className="rounded-full mx-auto bg-gradient-to-tr from-primary to-secondary" />
          {/* </div> */}
        </div>
        </div>
      </div>
      
      <div className='py-8'></div>
      {/* Banner */}
      <div className='relative flex flex-col md:flex-row bg-gradient-to-tr from-secondary to-primary-dark rounded-md items-center justify-center'>
        <Image src="/working.png" alt="Working together" width={300} height={400} className='m-16 z-10'/>
        <div className='z-10'>
          <h2 className='text-white'>We'll be in touch</h2>
          <p className='text-white py-8'>While you're waiting, please feel free to read My Blog on some of the things I have learnt to support businesses.</p>
          <Link href="/blog"><button className='px-4 py-2 bg-white rounded'>Rob's Blog</button></Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
