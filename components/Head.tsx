import NextHead from 'next/head';

const GoogleAnalytics = () => (
  <NextHead>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-9XHZF56DJJ"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9XHZF56DJJ');
        `,
      }}
    />
  </NextHead>
);

export default GoogleAnalytics;