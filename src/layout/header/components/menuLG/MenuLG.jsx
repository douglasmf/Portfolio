import React from 'react'
import * as S from './MenuLG.style'
import LinkMenu from './LinkMenu'
import { FaUserCircle,FaCode,FaFolderOpen,FaEnvelope  } from 'react-icons/fa';


const MenuLG = () => {
  return (
    <S.MenuStyle>
      <LinkMenu title='About' target='about'>
        <FaUserCircle/>
      </LinkMenu>
      <LinkMenu title='Skills' target='skills'>
        <FaCode/>
      </LinkMenu>
      <LinkMenu title='Projects' target='projects'>
        <FaFolderOpen/> 
      </LinkMenu>
      <LinkMenu title='Contact' target='contact'>
      <FaEnvelope/>
      </LinkMenu>
    </S.MenuStyle>
  )
}

export default MenuLG