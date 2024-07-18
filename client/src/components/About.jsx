import React from 'react';
import "../Css/About.css"

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h1 className='about-head'>About Us</h1>
        <p className='about-para'>
          Welcome to JerseyHub, your number one source for all things jerseys. We're dedicated to giving you the very best of sportswear, with a focus on quality, customer service, and uniqueness.
        </p>
        <p className='about-para'>
          Founded in 2023, JerseyHub has come a long way from its beginnings. When we first started out, our passion for sports drove us to start our own business.
        </p>
        <p className='about-para'>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className='about-para'>
          Sincerely,<br />
          The JerseyHub Team
        </p>
      </div>
    </section>
  );
};

export default About;
