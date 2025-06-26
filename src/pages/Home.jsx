import React from 'react';
import Hero from '../components/Hero';
import Team from '../components/Team';

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="team">
        <Team />
      </section>
    </div>
  );
};

export default Home;
