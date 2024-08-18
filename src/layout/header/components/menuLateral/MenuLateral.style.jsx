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
`;

