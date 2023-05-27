import React from 'react'

type Props = {}

export default function Footer({}: Props) {
    const currentYear = new Date().getFullYear();

    return (
      <footer className=" text-white bg-dark shadow-xl">
      <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center md:-mx-3 md:items-center md:justify-between p-8">
            <h3 className="text-3xl font-semibold tracking-tight md:mx-3 xl:text-4xl">robfraser.dev</h3>
            <p className="mt-4 text-sm mb-8">© Copyright {currentYear}. All Rights Reserved.</p>
          </div>
      </div>
      </footer>
  )
}