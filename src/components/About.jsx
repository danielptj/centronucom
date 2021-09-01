import React from 'react';
import './About.css';

export function About() {
  return (
    <div className='about'>
      <h1>O que é o NUCOM?</h1>
      <div className='about-wrapper'>
          <section className='about-text'>
            Somos um núcleo do Departamento de Psicologia da UFC que busca o fortalecimento da
            identidade individual e social, realizando pesquisas e projetos que tem o objetivo
            de fortalecer comunidades e conscientizar pessoas necessitadas.
            <br/>
            <br/>
            Criado em 1992, o NUCOM é fonte de diversas iniciativas de ensino e ações sociais,
            com ações em comunidades rurais e apoiando pessoas em situação de rua. A nossa visão
            ao realizar projetos de extensão é a de incentivar a cooperação, onde todos os indivíduos
            envolvidos tem seu próprio valor de fortalecimento.
            <br/>
            <br/>
            Convidamos você a conhecer mais sobre nós em nossos
            documentários, pesquisas, livros e artigos!
          </section> 
          <img src='images/pintando.jpeg' alt="Imagem NUCOM" />
      </div>
    </div>
  );
}