import React from 'react'
import * as S from './About.style'
import TitleSection from '../../../../components/TitleSection/TitleSection'
import {FaGithub , FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
    <S.AboutContainer >
      <TitleSection name='Sobre mim' />
      <S.AboutContain>
        <S.AboutImage>
          <S.AboutId>
            <img src='perfil.png' alt="Douglas Monteiro" />
            <h2>Douglas Monteiro</h2>
            <h3>Desenvolvedor Front-End</h3>
          </S.AboutId>
          <a href="/curriculo.pdf" className="curriculo" target="_blank">Curriculo</a>
          <div className="socialLinks">
            <a href="https://github.com/douglasmf" target="_blank"><FaGithub id='github'/> Github</a>
            <a href="https://www.linkedin.com/in/douglas-monteiro-421b90300/" target="_blank"><FaLinkedin id='linkedin'/> Linkedin</a>
          </div>
        </S.AboutImage>
        <S.AboutText>
          <p>Sou entusiasmado pelo desenvolvimento front-end e estou continuamente me dedicando ao aprendizado e prática das tecnologias que o compõem. Meu objetivo é aprimorar minhas habilidades e desenvolver soluções de uma forma rápida e eficiente</p> <br/>
          <p>Minhas principais habilidades envolvem HTML, CSS, JavaScript e React, e estou sempre aberto a explorar novas ferramentas e frameworks que possam agregar valor aos projetos. Atualmente, estou em busca de minha primeira oportunidade para aplicar e expandir meus conhecimentos.</p>
        </S.AboutText>
      </S.AboutContain>
    </S.AboutContainer>
  )
}

export default About