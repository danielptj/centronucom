import React from 'react';
import './Cards.css';
import { CardItem } from './CardItem';

export function Cards() {
  return (
    <div className='cards'>
      <h1 className='title'>Veja os nossos vídeos no canal do NUCOM!<a 
        href="https://www.youtube.com/channel/UCJhyzc15V8scM9rFmNH798Q"
        className='social-icon-link youtube'
        target='_blank'
        rel="noopener noreferrer" aria-label='Youtube'
      >
      <i className='fab fa-youtube'/>
      </a></h1>
      <br/>
      <p className='subtitle'>Ou assista a alguns vídeos selecionados abaixo:</p> 
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <CardItem
              src='images/thumb1.jpg'
              text='Conheça a história do NUCOM contada a partir de depoimentos de ex integrantes, atuais estudantes de graduação e professores/as do departamento de Psicologia.'
              label='Vídeo Institucional'
              url='https://www.youtube.com/embed/00Idft--4dA'
            />
            <CardItem
              src='images/thumb2.png'
              text='Documentário que retrata o projeto de extensão do NUCOM ao longo de 16 anos na comunidade rural de Canafístula, no Ceará.'
              label='Documentário'
              url='https://www.youtube.com/embed/ImLJANXMpeU'
            />
          </ul>
          <ul className='cards-items'>
            <CardItem
              src='images/thumb3.png'
              text='Vídeo sobre a pesquisa "Impactos da Pobreza no Desenvolvimento da Saúde Comunitária"'
              label='Pesquisa'
              url='https://www.youtube.com/embed/WxR80vgRqfM'
            />
            <CardItem
              src='images/thumb4.png'
              text='NUCOM POP - Ep 03: Pesquisa junto à População em Situação de Rua'
              label='NUCOM POP'
              url='https://www.youtube.com/embed/-UzPA6iFMeI'
            />
            <CardItem
              src='images/thumb5.png'
              text='NUCOM POP - Ep. 07: Estigma e Preconceito'
              label='NUCOM POP'
              url='https://www.youtube.com/embed/-UzPA6iFMeI'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
