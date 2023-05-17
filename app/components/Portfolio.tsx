const projects = [
    {
      title: 'Artwork',
      description: 'Using AI to generate ideas and concepts for new designs.',
      image: '/images/project1.png',
    },
    {
      title: 'Highland Student Exchange',
      description: 'A website that allows Highland students apply for a Japanese exchange program.',
      image: '/images/project2.png',
    },
    {
      title: 'NFT Minter',
      description: 'A web3 project that mints NFTs on the Solana blockchain.',
      image: '/images/project3.png',
    },
    {
      title: 'UX Design',
      description: 'A UX and UI design for a social media app.',
      image: '/images/project4.png',
    },
  ];
  
  const Portfolio: React.FC = () => {
    return (
      <section id="portfolio" className="py-12 mb-20">
        <div className="container mx-auto pt-20">
          <h2>My Portfolio</h2>
          <h3>A selection of my work for your approval</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-4 bg-slate-900/20 rounded shadow-md"
              >
                <img
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  