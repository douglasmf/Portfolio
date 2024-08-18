import React from 'react';
import { Element } from 'react-scroll';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { MainContainer } from './Main.style';

const Main = () => {
  return (
    <MainContainer>
      <Element name='about' className='sectionContainer'>
        <About className='sectionContent'/>
      </Element>
      <Element name='skills' className='sectionContainer'>
        <Skills className='sectionContent'/>
      </Element>
      <Element name='projects' className='sectionContainer'>
        <Projects className='sectionContent'/>
      </Element>
      <Element name='contact' className='sectionContainer'>
        <Contact className='sectionContent'/>
      </Element>
    </MainContainer>
  );
};

export default Main;
