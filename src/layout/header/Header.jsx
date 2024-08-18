import React from 'react'
import * as S from './Header.style'
import MenuLg from './components/menuLG/MenuLG'
import MenuLateral from './components/menuLateral/MenuLateral'
import ButtonMenu from './components/buttonMenu/ButtonMenu'

const Header = () => {
  return (
    <S.HeaderStyle>
      <img src="/perfil2.png" alt="" />
      <S.PerfilName>
        <h1>Douglas Monteiro</h1>
        <p>Desenvolvedor Front-End</p>
      </S.PerfilName>
      <MenuLg/>
      <MenuLateral/>
      <ButtonMenu/>
    </S.HeaderStyle>
  )
}

export default Header