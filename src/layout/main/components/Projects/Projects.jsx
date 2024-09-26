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
    imageSM: 'workSpaceSM-414.png',
    imageMD: 'workSpaceMD-688.png',
    imageLG: 'workSpaceLG-959.png',
    repositoryUrl: 'https://github.com/douglasmf/WorkSpace',
    liveUrl: 'https://work-space-seven.vercel.app/',
    desc: 'o WorkSpace é um conjunto de ferramentas para auxiliar no trabalho, estudos ou dia a dia'
  },
];

const Projects = () => {
  return (
    <S.ProjectsContainer>
        <TitleSection name='Projetos' />
        <Carousel projects={projectsData}/>
    </S.ProjectsContainer>
  )
}

export default Projects