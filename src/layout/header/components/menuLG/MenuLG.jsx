import React from 'react'
import * as S from './MenuLG.style'
import LinkMenu from './LinkMenu'
import { FaUserCircle,FaCode,FaFolderOpen,FaEnvelope  } from 'react-icons/fa';


const MenuLG = () => {
  return (
    <S.MenuStyle>
      <LinkMenu title='Sobre' target='about'>
        <FaUserCircle/>
      </LinkMenu>
      <LinkMenu title='Habilidades' target='skills'>
        <FaCode/>
      </LinkMenu>
      <LinkMenu title='Projetos' target='projects'>
        <FaFolderOpen/> 
      </LinkMenu>
      <LinkMenu title='Contato' target='contact'>
      <FaEnvelope/>
      </LinkMenu>
    </S.MenuStyle>
  )
}

export default MenuLG