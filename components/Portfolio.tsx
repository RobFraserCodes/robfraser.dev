import PortfolioExample from './PortfolioExample';
import { portfolio } from '../data/portfolio';

export default function Portfolio(){

return (
  <section id="portfolio" className="py-12 pb-20 bg-off-white dark:bg-dark dark:text-white">
    <div className="container mx-auto pt-20">
      <h2>My Portfolio</h2>
      <h3 className="mb-20 font-thin">A selection of my work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((item, index) => (
          <PortfolioExample title={item.title} img={item.img} desc={item.desc} url={item.url} />
        ))
        }
      </div>
    </div>
  </section>
  );
};