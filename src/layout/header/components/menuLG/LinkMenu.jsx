import React from 'react'
import * as S from './LinkMenu.style'

const LinkMenu = (props) => {
  return (
    <S.LinkStyle 
        to={props.target}
        smooth={true}
        duration={500}
        className="cursor-pointer">
        {props.children}
        {props.title}
    </S.LinkStyle>
  )
}

export default LinkMenu