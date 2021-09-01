import React from 'react';
import '../App.css';
import { RecoHero } from '../components/RecommenderHero';
import { BasicTree } from '../components/RecommenderFlow';
import { Footer } from '../components/Footer';

export function Recommender() {
  return (
    <>
      <RecoHero />
      <BasicTree />
      <Footer />
    </>
  );
}
