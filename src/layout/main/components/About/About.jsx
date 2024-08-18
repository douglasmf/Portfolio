import React from 'react'
import * as S from './About.style'
import TitleSection from '../../../../components/TitleSection/TitleSection'
import {FaGithub , FaLinkedin } from 'react-icons/fa'

const About = (props) => {
  return (
    <S.AboutContainer className={props.className}>
      <TitleSection name='About' />
      <S.AboutImage>
        <img src="/perfil.jpg" alt="Douglas Monteiro" />
        <h2>Douglas Monteiro</h2>
        <h3>Desenvolvedor Front-End</h3>
        <button>Donwload Curriculo</button>
        <a href="#"><FaGithub id='github'/> Github</a>
        <a href="#"><FaLinkedin id='linkedin'/> Linkedin</a>
      </S.AboutImage>
      <S.AboutText>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, dicta amet nulla aut, est minima totam impedit ut, voluptatibus saepe reiciendis iste ea. Quibusdam illum est eos exercitationem labore optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus placeat animi neque similique ullam earum at corrupti maxime qui ipsum consectetur illo nulla ipsam minus quae illum libero quos.</p>
      </S.AboutText>
    </S.AboutContainer>
  )
}

export default About