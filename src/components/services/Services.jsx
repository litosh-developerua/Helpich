import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>COMMUNITY MANAGMENT</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Activate your community and let the passive part of your audience engage with your product with the help of user-generated content, gamification, and community events.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>USER ACQUISITION</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>92% of consumers trust recommendations from people they know. Grow your user base natively through guerilla marketing, social engineering, and data-driven acquisition strategies.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>MEDIA RELATIONS</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Spread the buzz out to the wider community with the help of segmented and situational content, and sentiment-based public relations strategy.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
        <article className="service">
          <div className="service__head">
            <h3>FUNDRAISING</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prepare for an investment round with deep community analytics in a customer-based valuation modeling, measuring against acquizition, retention, and basket size.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services