import  useScroll from '../../../../hooks/useScroll.js'
import * as S from './ButtonMenu.style';

const ButtonMenu = ({ openMenu, toggleMenu }) => {
  const isVisible = useScroll(0.9);

  const toggleClass = () => {
    return openMenu ? 'animationLinha' : '';
  };
  return (
    <S.ButtonStyle onClick={toggleMenu} visible={isVisible}>
      <S.Linha className={toggleClass()} />
      <S.Linha className={toggleClass()} />
      <S.Linha className={toggleClass()} />
    </S.ButtonStyle>
  );
};

export default ButtonMenu;