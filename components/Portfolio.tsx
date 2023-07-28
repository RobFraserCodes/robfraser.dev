import PortfolioExample from './PortfolioExample';
import { portfolio } from '../data/portfolio';

export default function Portfolio(){

return (
  <section id="portfolio" className="pt-12 bg-off-white dark:bg-dark dark:text-white">
    <div className="container mx-auto pt-20">
      <h2>Portfolio & Services</h2>
      <h3 className="mb-20 font-thin">A selection of my work</h3>
    </div>
      <div className="flex-col space-y-8 pb-8">
        {portfolio.map((item, index) => (
          <PortfolioExample 
            key={index} 
            title={item.title} 
            img={item.img} 
            desc={item.desc} 
            url={item.url} 
            alt={item.alt}
            link={item.link}
            tags={item.tags}
          />
        ))
        }
      </div>
  </section>
  );
};