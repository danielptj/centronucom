import React from 'react';
import '../App.css';
import './HeroSection.css';

export function RecoHero() {
  return (
    <div className='hero-container'>
     <video disablePictureInPicture src='/videos/recovideo.mp4' autoPlay loop muted />
      <h1>Recomendações</h1>
      <p>Questionário para recomendações de conteúdo</p>
    </div>
  );
}
