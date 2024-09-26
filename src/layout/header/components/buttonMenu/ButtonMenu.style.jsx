import styled from "styled-components";
import {LightTheme} from '../../../../themes/Themes'

export const ButtonStyle = styled.button`
    position: fixed;
    top: 2%;
    left: 4%;
    width: 50px;
    height: 50px;
    padding: 0 5px;
    border: 4px solid ${LightTheme.colors.black800};
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;
    display: ${(props) => props.visible? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    z-index: 999;
    @media (min-width: 770px){
        display: none;
    }
`;

export const Linha = styled.div`
    width: 100%;
    height: 5px;
    background-color: ${LightTheme.colors.black800};
    transition: transform .8s ease, background-color .8s ease;
    transform-origin: center;

    &.animationLinha:nth-of-type(1) {
        transform: rotate(45deg) translate(7px, 7px);
        background-color: #BF1F3E;
    }

    &.animationLinha:nth-of-type(2) {
        opacity: 0;
    }

    &.animationLinha:nth-of-type(3) {
        transform: rotate(-45deg) translate(7px, -7px);
        background-color: #BF1F3E;
    }
`;
