import React from 'react';
import '../App.css';
import { RepoHero } from '../components/RepoHero';
import { Footer } from '../components/Footer';
import { RepoCards } from '../components/RepoCards';

export function Repository() {
  return (
    <>
      <RepoHero />
      <RepoCards />
      <Footer />
    </>
  );
}
