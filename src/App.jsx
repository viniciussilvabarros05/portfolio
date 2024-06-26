import { useState } from 'react'
import './App.css'
import logo from './assets/logo-portfolio.png' 
import sobre from './assets/sobre.svg'
import perfil from './assets/image_rgb_ptf.png'
import deixa_de_coisa from './assets/deixa_de_coisa.gif' 
import mediaboard from './assets/mediaboard.gif' 
import nefinance from './assets/nefinance.gif' 
import ImunizaKids from './assets/ImunizaKids.gif' 
import jogo_da_memoria from './assets/jogo_da_memoria.gif' 
import { SiTailwindcss } from "react-icons/si";
import {ImLinkedin2} from 'react-icons/im'
import {RxGithubLogo} from 'react-icons/rx'
import {FaReact,FaSass,FaCss3Alt,FaNode} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io5'
import {IoLogoFirebase} from 'react-icons/io5'
import {SiJavascript, SiMongodb,SiNextdotjs,SiTypescript} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai' 
import {TbBrandGit} from 'react-icons/tb'
import {MdPictureAsPdf} from 'react-icons/md'
import {FiExternalLink} from 'react-icons/fi'
import pdf from './assets/Curriculo_Vinicius_Barros.pdf'
function App() {

  return (
    <div className="App">
      <header>
          <div className='wrapper-logo'>
            <img src={logo}/>  
          </div>
          <nav>
            <a href="#sobre">Sobre</a>
            <a href="#skills">Skills</a>
            <a href="#projetos">Projetos</a>
            <a href="#experiencia">Experiência</a>
          </nav>
      </header>
           <div className="gradient-green-top"></div>
      <main>
        <section id="introducao" className='introducao'>
          <div>
            <h4>Vinícius Silva Barros</h4>
            <h1>DESENVOLVEDOR FRONTEND</h1>
            <p>Trabalho profissionalmente há 3 anos como desenvolvedor front-end, estudante de engenharia e artista nas horas vagas</p>
            <div className="container_buttons">
              <a  target="_blank"  id="linkedin" href='https://www.linkedin.com/in/vinicius-barros-5b616520a/'>
                <ImLinkedin2 size={24}/>
                  <p> 
                    LinkedIn
                 </p>
              </a>
              <a  target="_blank" id="github" href='https://github.com/viniciussilvabarros05'>
                <RxGithubLogo size={24}/>
                  <p>Github</p>
              </a>
              <a  target="_blank" id="curriculo"  href={pdf} download>
                <MdPictureAsPdf size={24}/>
                  <p>
                    Curriculo
                  </p>
              </a>
            </div>
           
          </div>
          <div className="wrapper-perfil">
            <img src={perfil}/>
          </div> 
          <div className="gradient-blue"></div>
        </section>
        <section id="sobre" className='resumo'>
          <img src={sobre}/>
          <div>
            <h2>Sobre mim</h2>
            <p>
              Comecei meus estudos em programação logo em 2019, antes da pandemia da covid-19, ao entrar na faculdade
              de Engenharia. Logo depois, em 2020 as portas se fecharam e me vi na situação de não ficar parada enquanto tudo fechava.
              Iniciei meus estudos em desenvolvimento mobile com kotlin. No ano seguinte, em 2021, comecei desenvolvimento web com Javascript. Hoje trabalho tanto em 
              desenvolvimento web como em mobile. Minha primeira vaga saiu em 2022, como desenvolvedor fullstack javascript
              após 8 meses estudando a stack React, Node e NOSql. 
            </p>
          </div>
     
        </section>
        <section id="skills" className='skills'>
          <h2>Minhas Skills</h2>
          <div>
            <div>
              <AiFillHtml5 size={50} color="#E96228"/>
              HTML5
            </div>
            <div>
              <FaCss3Alt size={50} color="#0068BA"/>
              CSS3
            </div>
            <div>
              <IoLogoJavascript size={50} color="#EFD81D"/>
              Javascript
            </div>
            <div>
              <SiTypescript size={50} color="#2F74C0"/>
              Typescript
            </div>
            <div>
              <FaNode size={50} color="#6FA560"/>
              NodeJs
            </div>
            <div>
              <FaReact size={50} color="#3D8AA0"/>
              ReactJs
            </div>
            <div >
              <SiNextdotjs size={50} color="#ffffff"/>
              NextJs
            </div>

            <div>
              <FaReact size={50} color="#876df8"/>
              React Native
            </div>
            <div>
              <TbBrandGit size={50} color="#E84E31"/>
              Git
            </div>
          
            <div>
              <FaSass size={50} color="#C76494"/>
              Sass
            </div>
            <div>
              <SiMongodb size={50} color="#118D4D"/>
              MongoDB
            </div>
            <div>
              <IoLogoFirebase size={50} color="#F58410"/>
              Firebase
            </div>
          </div>
        </section>
        <section id="projetos" className='projetos'>
          <div className='bolhas'>
            <span  style={{animation: "bolhas 12.6s linear infinite"}}></span>
            <span  style={{animation: "bolhas 14.6s linear infinite"}}></span>
            <span  style={{animation: "bolhas 25s linear infinite"}}></span>
            <span  style={{animation: "bolhas 15.5s linear infinite"}}></span>
            <span  style={{animation: "bolhas 9s linear infinite"}}></span>
            <span  style={{animation: "bolhas 15.8s linear infinite"}}></span>
            <span  style={{animation: "bolhas 10s linear infinite"}}></span>
            <span  style={{animation: "bolhas 21s linear infinite"}}></span>
            <span  style={{animation: "bolhas 20s linear infinite"}}></span>
            <span  style={{animation: "bolhas 13.9s linear infinite"}}></span>
            <span  style={{animation: "bolhas 16s linear infinite"}}></span>
            <span  style={{animation: "bolhas 18s linear infinite"}}></span>
            <span  style={{animation: "bolhas 14s linear infinite"}}></span>
            <span  style={{animation: "bolhas 14.5s linear infinite"}}></span>
            <span  style={{animation: "bolhas 13s linear infinite"}}></span>
            <span  style={{animation: "bolhas 12s linear infinite"}}></span>
            <span  style={{animation: "bolhas 19s linear infinite"}}></span>
            <span  style={{animation: "bolhas 22s linear infinite"}}></span>
            <span  style={{animation: "bolhas 17s linear infinite"}}></span>
            <span  style={{animation: "bolhas 12.5s linear infinite"}}></span>
            <span  style={{animation: "bolhas 14.8s linear infinite"}}></span>
            <span  style={{animation: "bolhas 12.6s linear infinite"}}></span>
            <span  style={{animation: "bolhas 14.6s linear infinite"}}></span>
            <span  style={{animation: "bolhas 26s linear infinite"}}></span>
            <span  style={{animation: "bolhas 17.3s linear infinite"}}></span>
            <span  style={{animation: "bolhas 10.6s linear infinite"}}></span>
            <span  style={{animation: "bolhas 16.8s linear infinite"}}></span>
            <span  style={{animation: "bolhas 10.5s linear infinite"}}></span>
            <span  style={{animation: "bolhas 22s linear infinite"}}></span>
            <span  style={{animation: "bolhas 20.6s linear infinite"}}></span>
            <span  style={{animation: "bolhas 18.9s linear infinite"}}></span>
            <span  style={{animation: "bolhas 16s linear infinite"}}></span>
            <span  style={{animation: "bolhas 18s linear infinite"}}></span>
            <span  style={{animation: "bolhas 17.8s linear infinite"}}></span>
            <span  style={{animation: "bolhas 14.5s linear infinite"}}></span>
            <span  style={{animation: "bolhas 13.8s linear infinite"}}></span>
            <span  style={{animation: "bolhas 12.8s linear infinite"}}></span>
            <span  style={{animation: "bolhas 19.8s linear infinite"}}></span>
            <span  style={{animation: "bolhas 22.8s linear infinite"}}></span>
            <span  style={{animation: "bolhas 17.8s linear infinite"}}></span>
            <span  style={{animation: "bolhas 18.5s linear infinite"}}></span>
            <span  style={{animation: "bolhas 15.8s linear infinite"}}></span>
          </div>
          <h2>Meus Projetos</h2>
          <div>
            
            <div>
              <h3>
               MediaBoard 
              </h3>
              <p>
               Este foi mais um freela feito para um grupo de mídia de uma igreja. Ele é usado para receber pedidos, através de um formulário que recebe imagens, datas e informações do evento. O pedido é recebido e gerenciado no painel.
               O painel serve para atribuir à equipe as tarefas com base nos pedidos recebidos, bem como organizar prazos de entregas.
              </p>
              <div className="tecnologias">
                <FaReact size={30} color="#3D8AA0"/>
                <SiTailwindcss size={30} color="#48a6c0"/>
                <IoLogoFirebase size={30} color="#F58410"/>
                <SiNextdotjs size={30} color="#ffffff"/>
              </div>
            </div>
            <img src={mediaboard}/>
          </div>
          <div>
            <img src={deixa_de_coisa}/>
            <div>
              <h3>
                Deixa de Coisa, Pikeno! 
                <a href='https://deixa-de-coisa-pikeno.web.app/' target="_blank">
                  <FiExternalLink/>
                </a>
              </h3>
              <p>
                Meu primeiro freelance como desenvolvedor foi feito para uma hamburgueria 
                com o nome "Deixa de Coisa, Pikeno". Essa aplicação leva a área de pedidos de lanches, 
                o recebimento de pedidos e a área administrativa, que fica o dashboard indicando 
                os pedidos mais frequêntes, saldo do caixa, detalhes do fluxo financeiro e envio de relatório para email.
              </p>
              <div className="tecnologias">
                <FaReact size={30} color="#3D8AA0"/>
                <FaSass size={30} color="#C76494"/>
                <IoLogoFirebase size={30} color="#F58410"/>
                <SiNextdotjs size={30} color="#ffffff"/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3>
                Nefinance
              </h3>
              <p>
                Este projeto foi desenvolvido para um fim bem específico. Gerenciar as finanças 
                de uma coordenação da igreja em que frequento. Havia uma grande confusão usando planilhas do excel para gerenciar todo o dinheiro do caixa
                .Esta aplicação utiliza o firebase para armazenar os dados, assim disponibilizando para todo o grupo as informações do caixa. Nesta aplicação incluem a lista de transações,
                resumo por categoria de saída e entrada, e tela de cadastro de transação.
              </p>
              <p>
                Este sendo meu primeiro app em react native em que realmente pude utlizar no meu dia a dia e fez sentido pra outras pessoas. Ele não está disponível para teste, então deixei o gif mostrando as funcionalidades.
              </p>
              <div className="tecnologias">
                <FaReact size={30} color="#876df8"/>
                <IoLogoFirebase size={30} color="#F58410"/>
                <FaCss3Alt size={30} color="#0068BA"/>
                <SiTypescript size={30} color="#2F74C0"/>
              </div>
            </div>
              <img src={nefinance} style={{width:"20%", marginRight:"10%"}}/>
          </div>
          <div>
            <img src="https://user-images.githubusercontent.com/58434465/132912454-0977a5bb-61aa-4e61-b4b2-584bfea8bba5.gif"/>
            <div>
              <h3>
                LetmeAsk
                <a href='https://letmeask-web-8917e.web.app/' target="_blank">
                  <FiExternalLink/>
                </a>
              </h3>
              <p>
                Aqui neste projeto, você pode criar salas de conversa e fóruns
                 sobre qualquer tema, uma aplicação muito útil para colher
                  pesquisas e opiniões de seu público. Este projeto foi criado em uma das NLW da Rocketseat.
              </p>
              <div className="tecnologias">
                <FaReact size={30} color="#3D8AA0"/>
                <IoLogoFirebase size={30} color="#F58410"/>
                <FaCss3Alt size={30} color="#0068BA"/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3>
                ImunizaKids
              </h3>
              <p>
                Este projeto foi o segundo freela que fiz. Ele se trata de uma caderneta digital de vacinas, que te auxilía a tomar suas vacinas no momento certo ou de seus filhos.
              </p>
              <p>
              Possui informações importantes das vacinas, bem como o controle sobre quais doses você já tomou. Além disso, pode também encontrar os pontos de vacina mais próximos de você, como postos de saúde, hospitais e centros de apoio.
              </p>
              <div className="tecnologias">
                <FaReact size={30} color="#876df8"/>
                <IoLogoFirebase size={30} color="#F58410"/>
                <FaCss3Alt size={30} color="#0068BA"/>
                <SiTypescript size={30} color="#2F74C0"/>
              </div>
            </div>
            <img src={ImunizaKids} style={{width:"20%", marginRight:"10%"}}/>
          </div>
          
          <div>
           <img src={jogo_da_memoria}/>
            <div>
              <h3>
                Jogo da Memória
                <a href='https://jogo-da-memoria-six.vercel.app/' target="_blank">
                  <FiExternalLink/>
                </a>
              </h3>
              <p>
                Primeiro jogo web criado apenas com Javascript e Css logo no início dos meus estudos em programação. Aproveite para dar uma jogadinha também. 
              </p>
              <div className="tecnologias">
                <AiFillHtml5 size={30} color="#E96228"/>
                <FaCss3Alt size={30} color="#0068BA"/>
                <SiJavascript size={30} color="#EFD81D"/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3>
                Landing Page
                <a href='https://project-landing-page-seven.vercel.app/' target="_blank">
                  <FiExternalLink/>
                </a>
              </h3>
              <p>
                Primeira landing page criada apenas com Javascript e Css. Uma simples aplicação, mas que vende muito bem para negócios locais. 
              </p>
              <div className="tecnologias">
                <AiFillHtml5 size={30} color="#E96228"/>
                <FaCss3Alt size={30} color="#0068BA"/>
                <SiJavascript size={30} color="#EFD81D"/>
              </div>
            </div>
           <img src={"https://user-images.githubusercontent.com/58434465/128177763-21db54f6-61b0-43fe-a419-859be1ea013c.gif"}/>
          </div>
        </section>
        <section id ="experiencia" className='experiencia'>
            <h2>Experiência</h2>
            <div>
              <div className='card_xp'>
                <h4>Catwalk - 2022/01 - 2023/02</h4>
                <h5>Desenvolvedor Fullstack Jr - Remoto</h5>
                <div className="tecnologias">
                  <FaReact size={25} color="#3D8AA0"/>
                  <FaSass size={25} color="#C76494"/>
                  <SiMongodb size={25} color="#118D4D"/>
                  <TbBrandGit size={25} color="#E84E31"/>
                  <SiTypescript size={25} color="#2F74C0"/>
                  <FaNode size={25} color="#6FA560"/>
                </div>
              </div>
            </div>
        </section>
      </main> 
    </div> 
  )
}

export default App
