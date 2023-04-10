import React from 'react'

type Props = {}

export default function TopBar({}: Props) {
  return (
    <div className='w-full bg-blue-500 p-2 flex px-4'>
        <a href="/"><div className='container px-8 mx-auto text-white justify-end'>Return</div></a>
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