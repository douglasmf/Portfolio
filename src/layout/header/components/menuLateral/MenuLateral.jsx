import { useState, useEffect } from 'react';
import * as S from './MenuLateral.style';
import MenuLink from './MenuLink';
import { FaUserCircle, FaCode, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const MenuLateral = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleLinks, setVisibleLinks] = useState([false, false, false, false, false]);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.9) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
                setVisibleLinks([false, false, false, false, false]); 
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
    }, [isVisible]);

    return (
        <S.MenuContainer isVisible={isVisible}>
            <MenuLink title='About' target='about' isVisible={visibleLinks[1]}>
                <FaUserCircle />
            </MenuLink>
            <MenuLink title='Skills' target='skills' isVisible={visibleLinks[2]}>
                <FaCode />
            </MenuLink>
            <MenuLink title='Projects' target='projects' isVisible={visibleLinks[3]}>
                <FaFolderOpen />
            </MenuLink>
            <MenuLink title='Contact' target='contact' isVisible={visibleLinks[4]}>
                <FaEnvelope />
            </MenuLink>
        </S.MenuContainer>
    );
};

export default MenuLateral;
