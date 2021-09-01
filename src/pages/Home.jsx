import React from 'react';
import '../App.css';
import { HeroSection } from '../components/HeroSection';
import { About } from '../components/About';
import { Cards }from '../components/Cards';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Cards />
      <Footer />
    </>
  );
}
