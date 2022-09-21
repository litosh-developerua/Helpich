import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills We Have</h5>
      <h2>Our Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>How does Helpich work?</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <p>We provide a wide range of analytical services to understand your community: its activity, sentiment, and engagement. We work closely with your marketing team and introduce an agile engagement strategy that can adapt to the circumstances on the go.</p>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__frontend">
          <h3>What are the use cases of our services?</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <p>We are working with companies that scale up or prepare for fundraising. Our team, in total, has participated in dozens of fundraising rounds for web3, fintech, and hi-tech products. We also have a history of top-tier PR placements, social media stunts, and shock events. For some clients, we focus solely on attracting and retaining audiences.</p>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>What is our market positioning?</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <p>We are a niche company with a narrow focus: web3, gaming, and SaaS. We are on the market since 2017, having rebranded to Helpich since 2020 with a greater emphasis on loyal customers.</p>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>What we offer?</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <p>We offer you a unique, bespoke service, the essence of which is the overall marketing and positional modernization of your product, tailoring strategies to the conditions and characteristics of your market, considering the competition, and - ultimately - driving your metrics upward.</p>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience