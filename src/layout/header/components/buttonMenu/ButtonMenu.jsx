import { useState } from 'react';
import * as S from './ButtonMenu.style';

const ButtonMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpen = () => {
        setOpenMenu(!openMenu);
    };

    const toggleClass = () => {
        return openMenu ? 'animationLinha' : '';
    };

    return (
        <S.ButtonStyle onClick={handleOpen}>
            <S.Linha className={toggleClass()} />
            <S.Linha className={toggleClass()} />
            <S.Linha className={toggleClass()} />
        </S.ButtonStyle>
    );
};

export default ButtonMenu;