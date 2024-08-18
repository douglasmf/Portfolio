import React from 'react'
import * as S from './MenuLink.style'

const MenuLink = (props) => {
  return (
    <S.LinkContainer
        to={props.target}
        smooth={true}
        duration={500}
        isVisible={props.isVisible} 
        className="cursor-pointer">
        {props.children}
        {props.title}
    </S.LinkContainer>
  )
}

export default MenuLink;
