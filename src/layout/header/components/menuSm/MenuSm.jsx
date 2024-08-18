import React from 'react'
import * as S from './MenuSm.style'
import MenuSmLink from './MenuSmLink'

const MenuSm = () => {
  return (
    <S.MenuStyle>
        <MenuSmLink title='Sobre' target='about' />
        <MenuSmLink title='Habilidades' target='skills' />
        <MenuSmLink title='Projetos' target='projects' />
        <MenuSmLink title='Contato' target='contact' />
    </S.MenuStyle>
  )
}

export default MenuSm