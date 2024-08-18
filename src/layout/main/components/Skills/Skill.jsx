import React from 'react'
import * as S from './Skills.style'

const Skill = (props) => {
  return (
    <S.Skill>
        <S.SkillItem className={props.class}/>
        <S.SkillContent className={props.class}>
            <S.SkillIcon>
                {props.icon}
            </S.SkillIcon>
            <S.SkillName>
                {props.title}
            </S.SkillName>
        </S.SkillContent>
    </S.Skill>
  )
}

export default Skill