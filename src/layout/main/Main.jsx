import React, {useEffect, useState} from 'react';
import { Element } from 'react-scroll';
import useScroll from '../../hooks/useScroll.js';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills2 from './components/Skills/Skills2';
import { MainContainer, ReturnTop } from './Main.style';
import { TiArrowSortedUp } from "react-icons/ti";



const Main = () => {
  const isVisible = useScroll(0.9);
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    if (isVisible) {
      setVisible(true)
    }
    else{
      setVisible(false)
    }
  },[isVisible])

  return (
    <MainContainer>
      <Element name='about' className='sectionContainer'>
        <About/>
      </Element>
      <Element name='skills' className='sectionContainer'>
        <Skills2/>
      </Element>
      <Element name='projects' className='sectionContainer'>
        <Projects/>
      </Element>
      <Element name='contact' className='sectionContainerContact'>
        <Contact/>
      </Element>
      <ReturnTop 
        to='header'
        smooth={true}
        duration={500} 
        className="cursor-pointer"
        visibility= {visible}>
          <span><TiArrowSortedUp /></span>
          <span>Inicio</span>
      </ReturnTop>
    </MainContainer>
  );
};

export default Main;
