import React from 'react';
import useScroll from '../../../../hooks/useScroll'
import * as S from './MenuSm.style';
import MenuSmLink from './MenuSmLink';
import { FaUserCircle, FaCode, FaFolderOpen, FaEnvelope } from 'react-icons/fa';


const MenuSm = ({ openMenu }) => {
  const isVisible = useScroll(0.9)
  return (
    <S.MenuStyle openMenu={openMenu} visible={isVisible}>
      <MenuSmLink title='Sobre' target='about'>
        <FaUserCircle />
      </MenuSmLink>
      <MenuSmLink title='Habilidades' target='skills' class='skillIcon'>
        <FaCode />
      </MenuSmLink>
      <MenuSmLink title='Projetos' target='projects'>
        <FaFolderOpen />
      </MenuSmLink>
      <MenuSmLink title='Contato' target='contact'>
        <FaEnvelope />
      </MenuSmLink>
    </S.MenuStyle>
  );
};

export default MenuSm;
