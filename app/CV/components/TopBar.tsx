import React from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

type Props = {}

export default function TopBar({}: Props) {
  return (
    <div className='w-full bg-blue-500 p-2 flex px-4'>
        <a href="/"><div className='container px-8 mx-auto text-white flex'><ArrowUturnLeftIcon className='w-4 h-4 mr-2 mt-1'/>Return to homepage</div></a>
        {/* <div>
            <ul className='flex text-white'>
                <li className='px-4'>Education</li>
                <li className='px-4'>Skills</li>
                <li className='px-4'>Experience</li>
            </ul>
        </div> */}
    </div>
  )
}