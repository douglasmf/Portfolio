import React from 'react'
import * as S from './MenuSmLink.style'

const MenuSmLink = (props) => {
  return (
    <S.LinkStyle 
    to={props.target}
    smooth={true}
    duration={500} 
    className={props.class}>
    {props.children}
    {props.title}
    </S.LinkStyle>
  )
}

export default MenuSmLink