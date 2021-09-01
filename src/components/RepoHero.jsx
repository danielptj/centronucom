import React from 'react';
import '../App.css';
import './HeroSection.css';

export function RepoHero() {
  return (
    <div className='hero-container'>
      <video disablePictureInPicture src='/videos/repovideo.mp4' autoPlay loop muted />
      <h1>Repositório</h1>
      <p>Nossos livros e publicações</p>
    </div>
  );
}
