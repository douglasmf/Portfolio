import styled from "styled-components";

export const MenuContainer = styled.nav`
    position: fixed;
    top: 10vh;
    left: ${({ isVisible }) => (isVisible ? '7vw' : '-100vw')};
    transform: translateX(-50%);
    transition: left .5s ease-in-out; 
    display: flex;
    flex-direction: column;
    gap: 4vh;
    z-index: 999;
    @media (max-width: 999px){
        left: ${({ isVisible }) => (isVisible ? '4vw' : '-100vw')};
    }
    @media (max-width: 769px){
        display: none;
    }
`;

