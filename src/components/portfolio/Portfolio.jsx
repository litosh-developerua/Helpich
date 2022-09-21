import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'POLKAPAD: Polkapad is building a web3 launchpad for applications that work with Polkadot and Kusama cryptocurrencies. We have focused on social media strategies and growing their early community.',
    github: 'https://github.com',
    demo: 'https://polkapad.network/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'ASKFM FUNDRAISING: ASKfm is a questions-and-answers based social network with 215 million users and 100 million mobile installs. We have worked with ASKfm in preparation for their tokenized product launch and a large fundraising round.',
    github: 'https://github.com',
    demo: 'https://www.crunchbase.com/organization/ask-fm',
  },
  {
    id: 3,
    image: IMG3,
    title: 'NAGA COIN OFFERING: Naga is a German fintech company ranked among the world’s top 20 cryptocurrency exchanges. It offers over 1,000 tradable stock and crypto assets for its 1 million users. We have been working with Naga since 2017, helping launch their crypto product, engaging and maintaining their audience since.',
    github: 'https://github.com',
    demo: 'https://nagacoin.io/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Our Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary" target="_blank">
                  Open Live
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
