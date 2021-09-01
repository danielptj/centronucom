import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-logo'>
            <img src='images/logo.svg' alt="Logo" />
            <br/><br/><br/><br/>
            <a 
              href="https://github.com/danielptj/centronucom"
              target='_blank'
              rel="noopener noreferrer"
            > Disponível no GitHub </a>
          </div>
          <div className='footer-link-items'>
            <h2>Fale Conosco</h2>
            <p>NUCOM UFC</p>
            <p>Avenida da Universidade, 2762</p>
            <p>Benfica - Fortaleza, CE</p>
            <p>CEP: 60020-181</p>
            <p>(85) 3366.7729</p>
            <p>nucomufc@yahoo.com.br</p>
            <a 
              href="https://linktr.ee/nucomufc"
              target='_blank'
              rel="noopener noreferrer"
            > linktr.ee/nucomufc </a>
            <section className='social-media'>
            <div className='social-media-wrap'>
              <div className='social-icons'>
                <a 
                  href="https://www.facebook.com/nucomufcpsicologia"
                  className='social-icon-link facebook'
                  target='_blank'
                  rel="noopener noreferrer"
                  aria-label='Facebook'
                >
                  <i className='fab fa-facebook-f' />
                </a>
                <a 
                  href="https://www.instagram.com/nucomufc/"
                  className='social-icon-link instagram'
                  target='_blank'
                  rel="noopener noreferrer"
                  aria-label='Instagram'
                >
                  <i className='fab fa-instagram' />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCJhyzc15V8scM9rFmNH798Q"
                  className='social-icon-link youtube'
                  target='_blank'
                  rel="noopener noreferrer"
                  aria-label='Youtube'
                >
                  <i className='fab fa-youtube' />
                </a>
              </div>
            </div>
          </section>
          </div>        
        </div>
      </div>
    </div>
  );
}
