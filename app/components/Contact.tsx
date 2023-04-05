'use client';

import React from 'react';
import {useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

type Props = {}

function Contact({}: Props) {
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
      version: 'weekly',
    });
    let map; 
    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  });

  return (
    <section id="contact">
      <div >
        <h1 className="h1">Contact Rob</h1>
        <p className="mt-6 max-w-xl text-center mx-auto mb-8">If you would like to talk about your next awesome project feel free to get in touch.</p>
      </div>
      <div className='bg-slate-700'>
        <div className="container mx-auto max-w-5xl p-8">
        <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-64 md:h-auto">
              <div className="mt-6 mb-20 space-y-8 md:mt-8 flex flex-col">
              <p className="flex">
                  <MapPinIcon className='w-6 h-6'/>
                  <span className="mx-2">Based in the Highlands of Scotland, UK.</span>
              </p>

              <p className="flex">
                  <PhoneIcon className='w-6 h-6'/>
                  <span className="mx-2">(+44) 0772 7777 494</span>
              </p>

              <p className="flex">
                  <EnvelopeIcon className='w-6 h-6'/>
                  <span className="mx-2">hi@robfraser.dev</span>
              </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-64 md:h-auto" id="map">
            {/* Space for the contact form */}
            </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Contact;