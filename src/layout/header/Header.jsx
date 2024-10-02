import React, { useState } from 'react';
import useMedia from '../../hooks/useMedia'
import { Element } from 'react-scroll';
import * as S from './Header.style';
import MenuLg from './components/menuLG/MenuLG';
import MenuLateral from './components/menuLateral/MenuLateral';
import ButtonMenu from './components/buttonMenu/ButtonMenu';
import MenuSm from './components/menuSm/MenuSm';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const telaSmall = useMedia('(max-width: 769px)');

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Element name='header'>
      <S.HeaderStyle>
        <img src={telaSmall? '/perfil.png' : '/perfil_lado.png'} alt='Douglas Monteiro'/>
        <S.PerfilName>
          <h1>Douglas Monteiro</h1>
          <p>Desenvolvedor Front-End</p>
        </S.PerfilName>
        <MenuLg />
        <MenuLateral />
        <ButtonMenu openMenu={openMenu} toggleMenu={handleToggleMenu} />
        <MenuSm openMenu={openMenu} />
      </S.HeaderStyle>
    </Element>
  );
};

export default Header;
