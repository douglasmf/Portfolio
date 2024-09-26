import React from 'react';
import * as S from './Skills2.style'
import TitleSection from '../../../../components/TitleSection/TitleSection'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBars, FaBootstrap, FaGitSquare} from 'react-icons/fa'
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";

const habilidades = [
    {
        icon: <FaHtml5 color="#E44D26"/>,
        title: "HTML"
    },
    {
        icon: <FaCss3Alt color="#1572B6"/>,
        title: "CSS"
    },
    {
        icon: <FaJs color="#F7DF1E"/>,
        title: "JS"
    },
    {
        icon: <FaReact color="#61DAFB"/>,
        title: "React"
    },
    {
        icon: <FaBootstrap color="#7952B3"/>,
        title: "Bootstrap"
    },
    {
        icon: <RiTailwindCssFill color="#38BDF8"/>,
        title: "Tailwind"
    },
    {
        icon: <FaGitSquare color="#F05032"/>,
        title: "Git"
    },
    {
        icon: <SiStyledcomponents color="#DB7093"/>,
        title: <>Styled<br />Components</>
    },
    {
        icon: <FaNodeJs color="#339933"/>,
        title: "Node JS"
    },
] 




const Skills2 = () => {

  return (
    <S.SkillsContainer >
      <TitleSection name='Habilidades' />
      <S.Cards>
        {habilidades.map((skill, i) => (
            <S.Card key={i}>
                <S.CardContent>
                    {skill.icon}
                    <p>{skill.title}</p>
                </S.CardContent>
            </S.Card>
        ))}
      </S.Cards>
          
      
    </S.SkillsContainer>
  )
    
  
};

export default Skills2;
