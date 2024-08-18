import React from 'react'
import * as S from './Projects.style'
import TitleSection from '../../../../components/TitleSection/TitleSection'
import Carousel from '../../../../components/CarouselProjects/Carousel'

const projectsData = [
  {
    title: 'InDecor',
    imageSM: 'inDecorSM.png',
    imageMD: 'inDecorMD.png',
    imageLG: 'inDecorLG.png',
    repositoryUrl: 'https://github.com/douglasmf/inDecor',
    liveUrl: 'https://indecor-eight.vercel.app/',
    desc: 'Está Landing Page é uma chamada para um evento sobre decoração de ambientes'
  },
  {
    title: 'MoviesLib',
    imageSM: 'moviesLibSM.png',
    imageMD: 'moviesLibMD.png',
    imageLG: 'moviesLibLG.png',
    repositoryUrl: 'https://github.com/douglasmf/moviesLib',
    liveUrl: 'https://movies-lib-psi-pied.vercel.app/',
    desc: 'o MoviesLib reune as informações de filmes separados por categorias'
  },
  {
    title: 'WorkSpace',
    imageSM: 'workSpaceSM.png',
    imageMD: 'workSpaceMD.png',
    imageLG: 'workSpaceLG.png',
    repositoryUrl: 'https://github.com/douglasmf/WorkSpace',
    liveUrl: 'https://work-space-eta.vercel.app/',
    desc: 'o WorkSpace é um conjunto de ferramentas para auxiliar no trabalho, estudos ou dia a dia'
  },
];

const Projects = (props) => {
  return (
    <S.ProjectsContainer className={props.className}>
        <TitleSection name='Projects' />
        <Carousel projects={projectsData}/>
    </S.ProjectsContainer>
  )
}

export default Projects