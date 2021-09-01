import React from 'react';
import { Wizard, Step, Controls } from 'react-decision-tree-flow';
import './Recommender.css';
import './RepoCardItem.css';

export const BasicTree = () => {
  const tree = {
    step1: ['step2'],
    step2: ['step1','step3', 'step4', 'step5', 'step6', 'step7'],
    step3: [],
    step4: [],
    step5: ['step1','step7', 'step8', 'step9', 'step10'],
    step6: [],
    step7: [],
    step8: ['step1', 'step12', 'step13', 'step14'],
    step9: [],
    step10: [],
    step11: [],
    step12: ['step1'],
    step13: [],
    step14: [],
  }; 
  
  return (
    <div className='reco'>
      <Wizard tree={tree} first="step1">
        <Step name="step1">
          <div>
            <h1>Olá!</h1>
            <br/>
            <p>Está procurando um assunto específico? O nosso questionário de recomendações pode te ajudar!</p>
            <br/>
            <p>É simples: você seleciona os assuntos nos quais tem interesse, e no final recomendamos conteúdos que podem lhe ser úteis. Pronto?</p>
            <br/>
            <Controls>
              {({ destinations: { step2 } }) => (
                <button onClick={step2}>Começar</button>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="step2">
          <div>
            <h1>Selecione um tema</h1>
            <br/> <br/>
            <Controls>
              {({ destinations: { step1, step3, step4, step5, step6, step7 } }) => (
                <div>
                  <button onClick={step3}>Pobreza</button>
                  <br/>
                  <button onClick={step4}>Psicologia da Libertação</button>
                  <br/>
                  <button onClick={step5}>Metodologia</button>
                  <br/>
                  <button onClick={step6}>Juventude</button>
                  <br/>
                  <button onClick={step7}>Condição Feminina</button>
                  <br/><br/>
                  <button onClick={step1}> <i class="fas fa-undo-alt"></i>  Retornar</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="step5">
          <div>
            <h1>Selecione um tópico</h1>
            <br /> <br/>
            <Controls>
              {({ destinations: { step1, step8, step9, step10, step11 } }) => (
                <div>
                  <button onClick={step8}>Educação</button>
                  <br/>
                  <button onClick={step9}>Libertação</button>
                  <br/>
                  <button onClick={step10}>Pobreza Rural</button>
                  <br/>
                  <button onClick={step11}>Inovação</button>
                  <br/><br/>
                  <button onClick={step1}> <i class="fas fa-undo-alt"></i>  Retornar</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="step8">
          <div>
            <h1>Selecione outro tópico</h1>
            <br /> <br/>
            <Controls>
              {({ destinations: { step1, step12, step13, step14 } }) => (
                <div>
                  <button onClick={step12}>Ética</button>
                  <br/>
                  <button onClick={step13}>Saúde Mental</button>
                  <br/>
                  <button onClick={step14}>Fatalismo</button>
                  <br/><br/>
                  <button onClick={step1}> <i class="fas fa-undo-alt"></i>  Retornar</button>
                </div>
              )}
            </Controls>
          </div>
        </Step>
        <Step name="step12">
          <div>
            <h1>Recomendações</h1>
            <p>Metodologia - Educação e Ética</p>
            <br /> <br/>
            <ul className="repo-ul">
              <a className="repo-item" href="http://pepsic.bvsalud.org/pdf/psipesq/v11n2/02.pdf" target='_blank' rel="noopener noreferrer">
                <div className="repo-item-link">
                  <figure className='repo-item-pic-wrap'>
                    <img
                      className='repo-items-img'
                      alt="imagem"
                      src="https://i.imgur.com/eE49bJX.png"
                    />
                  </figure>
                  <div className='repo-item-info'>
                    <b className='repo-item-title'>Saúde Comunitária e Psicologia Comunitária: suas contribuições às metodologias participativas</b>
                  </div>
                </div>
              </a>
              <a className="repo-item" href="http://www.repositorio.ufc.br/bitstream/riufc/23071/1/2016_art_gomeneseslcholanda.pdf" target='_blank' rel="noopener noreferrer">
                <div className="repo-item-link">
                  <figure className='repo-item-pic-wrap'>
                    <img
                      className='repo-items-img'
                      alt="imagem"
                      src="https://i.imgur.com/TOtbsSz.png"
                    />
                  </figure>
                  <div className='repo-item-info'>
                    <b className='repo-item-title'>Interlocuções entre a psicologia analítica-comportamental e da libertação: algumas contribuições de Skinner e Martín-Baró <br/><br/> Ética </b>
                  </div>
                </div>
              </a>
            </ul>
            <br/><br/><br/><br/>
            <Controls>
              {({ destinations: { step1 } }) => (
            <button onClick={step1}> <i class="fas fa-undo-alt"></i>  Recomeçar</button>
            )}
            </Controls>
          </div>
        </Step>
      </Wizard>
    </div>
  );
};