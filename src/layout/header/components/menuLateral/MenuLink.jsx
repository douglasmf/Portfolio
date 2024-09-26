import React from 'react'
import * as S from './MenuLink.style'
import useMedia from '../../../../hooks/useMedia'

const MenuLink = (props) => {
  const visible = useMedia('(min-width: 1000px)');
  return (
    <S.LinkContainer
        to={props.target}
        smooth={true}
        duration={500}
        isVisible={props.isVisible} 
        className="cursor-pointer">
        {props.children}
        {visible && props.title}
    </S.LinkContainer>
  )
}

export default MenuLink;
