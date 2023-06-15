import React from 'react'

function EmailSubscribe() {
  return (
    <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
        <p className="text-dark">Stay updated on the latest news.</p>
        <form onSubmit={(e) => e.preventDefault()} className="items-center justify-center gap-3 sm:flex">
        <div className="relative">
            <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <input
            type="text"
            placeholder="Enter your email"
            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-secondary shadow-sm rounded-lg sm:max-w-xs"
            />
        </div>
        <button className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-secondary hover:bg-secondary-dark active:bg-secondary-dark active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto">
            Subscribe
        </button>
        </form>
    </div>
  )
}

export default EmailSubscribe;