import { useState, useEffect } from 'react';
import useScroll from '../../../../hooks/useScroll'
import * as S from './MenuLateral.style';
import MenuLink from './MenuLink';
import { FaUserCircle, FaCode, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const MenuLateral = () => {
    const isVisible = useScroll(0.9);
    const [visibleLinks, setVisibleLinks] = useState([false, false, false, false, false]);

    useEffect(() => {
        if (isVisible) {
            const timeouts = [];
            for (let i = 0; i < visibleLinks.length; i++) {
                timeouts.push(setTimeout(() => {
                    setVisibleLinks(prev => {
                        const newVisibleLinks = [...prev];
                        newVisibleLinks[i] = true;
                        return newVisibleLinks;
                    });
                }, i * 400));
            }
            return () => timeouts.forEach(timeout => clearTimeout(timeout));
        }
        else{
            setVisibleLinks([false, false, false, false, false]); 
        }
    }, [isVisible]);

    return (
        <S.MenuContainer isVisible={isVisible}>
            <MenuLink title='Sobre' target='about' isVisible={visibleLinks[1]}>
                <FaUserCircle />
            </MenuLink>
            <MenuLink title='Habilidades' target='skills' isVisible={visibleLinks[2]}>
                <FaCode />
            </MenuLink>
            <MenuLink title='Projetos' target='projects' isVisible={visibleLinks[3]}>
                <FaFolderOpen />
            </MenuLink>
            <MenuLink title='Contato' target='contact' isVisible={visibleLinks[4]}>
                <FaEnvelope />
            </MenuLink>
        </S.MenuContainer>
    );
};

export default MenuLateral;
