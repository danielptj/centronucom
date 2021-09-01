import React from 'react';
import '../App.css';
import './HeroSection.css';

export function HeroSection() {
  return (
    <div className='hero-container'>
      <video disablePictureInPicture src='/videos/herovideo.mp4' autoPlay loop muted />
      <h1>Centro NUCOM</h1>
      <p>Coleção de conteúdos sobre psicologia comunitária</p>
    </div>
  );
}
