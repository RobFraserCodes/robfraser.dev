'use client';

import React from 'react';
import {useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import ContactForm from './subComponents/contactForm';

type Props = {}

function Contact({}: Props) {
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
      version: 'weekly',
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: 57.7294395, lng: -0.9918013  },
        zoom: 7,
        mapId: '6bde207161a39a05',
      });
    });
  }, []);

  return (
    <div id="map-section">
      <div id="map"></div>
      <div id="section-content">
        <section className='bg-dark/80 text-white py-20' id="contact">
          <div className=''>
            <h1 className="h1">Let's Connect</h1>
            <h3 className="mt-6 max-w-xl text-center mx-auto font-thin">If you would like to talk about your next awesome project feel free to get in touch.</h3>
          </div>
          <div className=''>
            <div className="container mx-auto max-w-5xl p-8">
            <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 h-64 md:h-auto">
                  <div className="mt-6 mb-20 space-y-8 md:mt-8 flex flex-col">
                  <p className="flex">
                      <MapPinIcon className='w-6 h-6'/>
                      <span className="mx-2">Based in the Highlands of Scotland, UK.<br />Larch House, Daviot East, IV2 5XQ.</span>
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

                <div className="w-full md:w-1/2 h-64 md:h-auto mb-40 md:mb-0">
                <ContactForm />
                </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    </div>

  )
}

export default Contact;