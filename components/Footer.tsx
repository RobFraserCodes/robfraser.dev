import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white bg-black shadow-xl bottom-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:justify-between p-8">
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold tracking-tight md:mr-3 xl:text-4xl">robfraser.dev</h3>
            <p className="mt-4 text-sm mb-8">
              © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
          <div>
            <a
              href="https://www.bark.com/en/gb/company/rob-fraser-dev/ew1kw/"
              target="_blank"
              rel="noopener noreferrer"
              className="bark-widget"
              data-type="pro"
              data-id="ew1kw"
              data-image="medium-gold"
              data-version="3.0"
            >
              Rob Fraser Dev
            </a>
          </div>
        </div>
      </div>
      <script
        type="text/javascript"
        src="https://d3a1eo0ozlzntn.cloudfront.net/assets/js/frontend-v2/widgets-v2.24a197bed6.v2.js"
        defer
      ></script>
    </footer>
  );
};

export default Footer;