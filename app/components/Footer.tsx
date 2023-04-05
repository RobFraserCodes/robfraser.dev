import React from 'react'

type Props = {}

export default function Footer({}: Props) {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-gradient-to-tr from-slate-700 to-slate-800 shadow-xl">
      <div className="container mx-auto px-6 py-12">
          <div className="md:-mx-3 md:flex md:items-center md:justify-between">
          <h1 className="text-3xl font-semibold tracking-tight md:mx-3 xl:text-4xl">Rob Fraser Dev.</h1>
  
          <div className="mt-6 shrink-0 md:mx-3 md:mt-0 md:w-auto">
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">© Copyright {currentYear}. All Rights Reserved.</p>
          </div>
          </div>
      </div>
      </footer>
  )
}