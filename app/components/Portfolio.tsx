'use client';

import useSWR from 'swr';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
const fetcher = (url: string) => pb.collection(url).getFullList({ sort: '-created' });
  
  const Portfolio: React.FC = () => {
    const { data: portfolio, error } = useSWR('portfolio', fetcher);

    if (error) return <div>Failed to load</div>
    if (!portfolio) return <div>Loading...</div>

return (
  <section id="portfolio" className="py-12 pb-20 bg-off-white dark:bg-dark dark:text-white">
    <div className="container mx-auto pt-20">
      <h2>My Portfolio</h2>
      <h3 className="mb-20 font-thin">A selection of my work for your approval</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {portfolio.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y- p-4 bg-primary dark:bg-black rounded-lg shadow-md text-white"
          >
            <img
              src={`http://127.0.0.1:8090/api/files/8f1pvz2vcv54z7h/lmu20wvhuznl3iq/${project.img_head}?token=`}
              alt={`${project.title} thumbnail`}
              className="w-full h-48 object-cover rounded-md mb-8"
            />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mb-8">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
  
  export default Portfolio;
  