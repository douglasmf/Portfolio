import React from 'react';
import * as S from './Skills.style'
import TitleSection from '../../../../components/TitleSection/TitleSection'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBars, FaBootstrap, FaGitSquare} from 'react-icons/fa'
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";

import Skill from './Skill';

const Skills = (props) => {

  return (
    <S.SkillsContainer className={props.className}>
      <TitleSection name='Habilidades' />
      <S.AllSkills>
          <button>X</button>
          <S.SkillsList>
            <ul>
              <li><FaHtml5 size={25} color="#E44D26"/> HTML</li>
              <li><FaCss3Alt size={25} color="#1572B6"/> CSS</li>
              <li><FaJs size={25} color="#F7DF1E"/> JavaScript</li>
              <li><FaReact size={25} color="#61DAFB"/> React</li>
              <li><FaBootstrap size={25} color="#7952B3"/> Bootstrap</li>
              <li><RiTailwindCssFill size={25} color="#38BDF8"/> Tailwind</li>
              <li><FaGitSquare size={25} color="#F05032"/> Git</li>
              <li><SiStyledcomponents size={25} color="#DB7093"/> Styled Components</li>
              <li><FaNodeJs size={25} color="#339933"/> Node JS</li>
            </ul>
          </S.SkillsList>
      </S.AllSkills>
      <S.SkillsCircle>
        <S.SkillCenter>
          <button><FaBars /></button>
        </S.SkillCenter>
        
        <Skill title='HTML' icon={<FaHtml5 size={40} color="#E44D26"/>}/>
        <Skill title='CSS' class='item2' icon={<FaCss3Alt size={40} color="#1572B6"/>}/>
        <Skill title='JS' class='item3' icon={<FaJs size={40} color="#F7DF1E"/>}/>
        <Skill title='REACT' class='item4' icon={<FaReact size={40} color="#61DAFB"/>}/>
        <Skill title='NODE.JS' class='item5' icon={<FaNodeJs size={40} color="#339933"/>}/>
        <Skill title='TAILWIND' class='item6' icon={<RiTailwindCssFill size={40} color="#38BDF8"/>}/>
      </S.SkillsCircle>
    </S.SkillsContainer>
  )
    
  
};

export default Skills;
