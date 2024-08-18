import React from 'react';
import * as S from './Skills.style'
import TitleSection from '../../../../components/TitleSection/TitleSection'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, } from 'react-icons/fa'
import { RiTailwindCssFill } from "react-icons/ri";

import Skill from './Skill';

const Skills = (props) => {

  return (
    <S.SkillsContainer className={props.className}>
      <TitleSection name='Skills' />
      <S.SkillsCircle>
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
