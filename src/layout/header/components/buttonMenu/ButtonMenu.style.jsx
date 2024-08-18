import styled from "styled-components";

export const ButtonStyle = styled.button`
    position: fixed;
    top: 2rem;
    left: 2rem;
    width: 50px;
    height: 50px;
    padding: 0 5px;
    border: 4px solid #333;
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
`;

export const Linha = styled.div`
    width: 100%;
    height: 5px;
    background-color: #333;
    transition: transform .8s ease, background-color .8s ease;
    transform-origin: center;

    &.animationLinha:nth-of-type(1) {
        transform: rotate(45deg) translate(7px, 7px);
        background-color: #ff0000;
    }

    &.animationLinha:nth-of-type(2) {
        opacity: 0;
    }

    &.animationLinha:nth-of-type(3) {
        transform: rotate(-45deg) translate(7px, -7px);
        background-color: #ff0000;
    }
`;
